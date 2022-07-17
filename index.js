/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, Alert } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';

setJSExceptionHandler((error, isFatal) => {
  if (!!error.name && !!error.message) {
    Alert.alert('Unexpected Error Occured', 'Please restart the app', [
      {
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        },
      },
    ]);
  }
});

AppRegistry.registerComponent(appName, () => App);
