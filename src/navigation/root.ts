import * as React from 'react';

export const navigationRef: any = React.createRef();
import { StackActions } from '@react-navigation/native';

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function push(...args: any) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function goBack() {
  navigationRef.current?.dispatch(StackActions.pop(1));
}

export function replace(name: any, parms: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, parms));
}

export const theme = navigationRef.current?.theme;
