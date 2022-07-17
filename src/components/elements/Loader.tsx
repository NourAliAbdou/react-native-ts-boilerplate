import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { isRTL, allColors } from '@constants';

const Loader: FC<{ isVisible?: boolean; color?: string }> = ({
  isVisible = false,
  color = allColors.BLUE,
}) => {
  return (
    <View style={styles.main}>
      <Spinner
        style={styles.spinner}
        isVisible={isVisible}
        size={100}
        type={'Wave'}
        color={color}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  spinner: {
    // position: 'absolute',
    flex: 1,
    transform: [{ scaleX: isRTL ? -1 : 1 }],
    alignSelf: 'center',
    zIndex: 100,
  },
});
