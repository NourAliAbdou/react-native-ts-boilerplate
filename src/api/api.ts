import { create } from 'apisauce';
import { getRefreshToken } from '@api';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-root-toast';
import R from 'reactotron-react-native';
import { URL } from '@api/urls';

const api = create({
  baseURL: URL.BASE_URL_EXPORT,
  headers: { 'Content-Type': 'application/json' },
});
export const setAuthToken = async (token: string, refreshToken: string) => {
  try {
    api.setHeader('accessToken', token);
    await AsyncStorage.setItem('@accessToken', token);
    await AsyncStorage.setItem('@refreshToken', refreshToken);
  } catch (e) {
    R.log('rerr');
  }
};

api.axiosInstance.interceptors.request.use(
  async config => {
    const value = await AsyncStorage.getItem('@accessToken');

    config.headers.accessToken = value;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const value = await AsyncStorage.getItem('@refreshToken');
      const result: any = await getRefreshToken(value).catch(
        e => e.response.data.message,
      );
      R.logImportant('result', result);
      if (result.data.message === 'user must login first.') {
        await AsyncStorage.removeItem('@expirs');
        // Toast.show(result.data.message, {
        //   duration: Toast.durations.LONG,
        //   position: Toast.positions.BOTTOM,
        //   textColor: '#FFFF',
        //   shadow: true,
        //   animation: true,
        //   textStyle: {fontFamily: FontType.Regular},
        //   hideOnPress: true,
        //   backgroundColor: '#656B8D',
        //   delay: 0,
        //   opacity: 1,
        //   containerStyle: {
        //     marginBottom: 18,
        //     borderRadius: 10,
        //   },
        // });
      } else {
        setAuthToken(result.data.accessToken, result.data.refreshToken);
        return api.axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
