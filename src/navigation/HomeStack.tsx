import React from 'react';
import { ScreensNames } from '../constants/ScreensNames';
import { ScreensObject } from '@screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Header from '@components/templates/Header';
import { allColors } from '@constants';
const Stack = createNativeStackNavigator();
export const BottomToUp = {
  transitionSpec: {
    open: TransitionSpecs.FadeInFromBottomAndroidSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};
function HomeStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={() => ({
          headerMode: 'float',
          headerTintColor: 'transparent',
          headerStyle: { backgroundColor: allColors.GRAY + '50' },
          header: () => {
            return <Header />;
          },
        })}>
        <Stack.Screen
          name={ScreensNames.NAVIGATION_HOME_SCREEN}
          component={ScreensObject.HomeScreen}
        />
        <Stack.Screen
          name={ScreensNames.NAVIGATION_DETAILS_SCREEN}
          component={ScreensObject.CharacterDetails}
          options={() => ({
            backBehavior: 'firstRoute',
            headerShown: false,
            ...BottomToUp,
          })}
        />
      </Stack.Navigator>
    </>
  );
}

export default HomeStack;
