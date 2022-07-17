import NetworkUtils from './network';
import { URL } from './urls';

export const getHome = async () => {
  const result: any = await NetworkUtils.request(URL.home_url, 'GET', {})
    .then((response: any) => response)
    .catch(error => error);
  return result;
};
