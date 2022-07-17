import React, { FC } from 'react';
import {
  View,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Loader from '../elements/Loader';

import allColors from '@constants/allColors';

const { width } = Dimensions.get('screen');

import { useTheme } from '@constants/theme/AppThemeProvider';
import { appStyles } from '@constants';

export interface Props {
  didFinishInitialAnimation?: boolean;
  children?: any;
  color?: string;
  noStatus?: boolean;
  image?: any;
  loading: boolean;
}

const Layout: FC<Props> = props => {
  const { colors, isDark } = useTheme();
  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-mode' : 'dark-content'}
        backgroundColor={allColors.Transparent}
        translucent={true}
      />
      <View style={styles.land(props.color ? props.color : colors.background)}>
        <View style={styles.marginS} />
        <View style={styles.loader}>
          <Loader isVisible={props.loading} />
        </View>
        <View style={styles.main}>{props.children}</View>
      </View>
    </>
  );
};

export default Layout;
const styles = StyleSheet.create({
  land: color => {
    return {
      width: '100%',
      height: '100%',
      flex: 1,
      backgroundColor: color,
    };
  },
  main: {
    flex: 1,
    width: width,
    backgroundColor: 'transparent',
    zIndex: 0,
    marginBottom: Platform.OS === 'ios' ? wp(12) : wp(0),
  },
  loader: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  marginS: {
    width: width,
    marginTop: Platform.OS === 'ios' ? wp(8) : 0,
    ...appStyles.CenterContent,
  },
});
