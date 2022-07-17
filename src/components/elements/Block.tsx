import React, { FC, ReactElement } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { View } from 'react-native-animatable';
import { positions } from '@constants/dimensions';

export interface Props {
  style?: object | boolean;
  row?: boolean;
  flex?: boolean;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  space?: boolean;

  height?: boolean;
  shadowColor?: boolean;
  width?: boolean | number;
  duration?: number;
  delay?: number;

  safe?: boolean;
  children?: any;
  password?: boolean;
  motion?: string;
  noMotion?: boolean;

  value?: string;
  onChangeText?: (text: string) => void;
}
const Block: FC<Props> = (props): ReactElement => {
  const {
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    space,
    height,
    shadowColor,
    width,
    safe,
    children,
    style,
  } = props;
  const styleBlock = [
    style,
    styles.block,
    row && styles.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },

    height && { height },
    width && { width },
    shadowColor && { shadowColor },
  ];

  if (safe) {
    return (
      <SafeAreaView style={styleBlock} {...props}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={styleBlock} {...props}>
      {children}
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: positions.flex_end,
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: positions.flex_end,
    alignSelf: positions.flex_end,
  },
});
