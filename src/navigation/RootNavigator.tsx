import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ScreensNames } from '../constants/ScreensNames';
import { navigationRef } from './root';
import HomeStack from './HomeStack';
import { Loader, PreviewImage } from '@components';

const RootStack = createNativeStackNavigator();

function SwitchNavigator(): React.ReactElement {
  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<Loader isVisible={true} />}
      // theme={navTheme}
    >
      <RootStack.Navigator
        initialRouteName={ScreensNames.NAVIGATION_HOME_STACK}
        screenOptions={{ presentation: 'transparentModal' }}>
        <RootStack.Screen
          name={ScreensNames.NAVIGATION_HOME_STACK}
          component={HomeStack}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name={ScreensNames.PreviewImage}
          component={PreviewImage}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default SwitchNavigator;
