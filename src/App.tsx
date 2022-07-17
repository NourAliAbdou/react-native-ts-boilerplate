import React from 'react';

import 'react-native-gesture-handler';
import { LogBox, View, Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';

import { enableScreens } from 'react-native-screens';

import { store } from '@store';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppThemeProvider } from '@constants/theme/AppThemeProvider';
import SplashScreen from 'react-native-splash-screen';
const appstyle = { flex: 1 };
enableScreens();

const ProviderWrapper: React.FC = () => {
  LogBox.ignoreAllLogs(true);

  Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
  TextInput.defaultProps = {
    ...(TextInput.defaultProps || {}),
    allowFontScaling: false,
  };

  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <React.Fragment>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <AppThemeProvider>
            <View style={appstyle}>
              <RootNavigator />
            </View>
          </AppThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default ProviderWrapper;
