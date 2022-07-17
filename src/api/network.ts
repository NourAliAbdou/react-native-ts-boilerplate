/**
 * @flow
 */

import RNFetchBlob from 'rn-fetch-blob';

export const SUBSCRIPTION_ERROR_CODE = 402;

const TIMEOUT: number = 30 * 1000;

export default class NetworkUtils {
  /**
   * Make a request using specified params
   * @param {*} url The request url
   * @param {*} method The method, valid values (POST,GET,PUT,DELETE)
   * @param {*} body The request body in json format
   * @param {*} resultHandler The result handler which should be expecting response as string and isSuccess and error message
   */
  static request = async (url: string, method: any, body: any) => {
    //accessToken: string | null
    // Check if valid url
    if (!url) {
      throw 'Invalid url';
    }
    // Check if valid methof
    if (['POST', 'GET', 'PUT', 'DELETE'].indexOf(method) === -1) {
      throw 'Invalid method';
    }

    const options = { method: method };

    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Add body if request is put or post
    if (['POST', 'PUT'].indexOf(method) !== -1 && body) {
      if (body) {
        options.body = JSON.stringify(body);
      }
    }
    return RNFetchBlob.config({ timeout: TIMEOUT })
      .fetch(method, url, options.headers, options.body)
      .then(
        (response: any) => {
          // //console.log('response', response.data);
          // return NetworkUtils.ApiUtils.checkStatus(response);

          return NetworkUtils.ApiUtils.checkStatus(response);
        },
        (error: any) => {
          var error = new SError('Error', -100, '');
          throw error;
        },
      );
  };

  static ApiUtils = {
    // check response status and throw error if not success
    checkStatus: (response: any) => {
      if (response.respInfo.status === 200) {
        try {
          return response.json();
        } catch {
          return response.data;
        }
      } else if (response.respInfo.status === 401) {
        var error = new SError('Unauthorized', 401, '');
        throw error;
      } else if (response.respInfo.status === 500) {
        var error = new SError(
          // STRINGS.internal_Server_error
          'Internal server error',
          500,
          '',
        );
        throw error;
      } else if (response.respInfo.status === SUBSCRIPTION_ERROR_CODE) {
        // handle el payment
        var error = new SError('Error', 402, '');
        throw error;
      } else {
        let data = {};
        if (response.data) {
          data = JSON.parse(response.data);
        }
        var error = new SError(
          data.message || response.statusText,
          response.respInfo.status,
          data.errors,
        );
        throw error;
      }
    },
  };
}
class SError extends Error {
  constructor(message, code, errors) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.errors = errors;
  }
}
