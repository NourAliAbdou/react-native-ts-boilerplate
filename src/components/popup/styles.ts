import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { allColors } from '@constants';
import { positions, radius } from '@constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    zIndex: 1000000000000,
    position: 'absolute',
    bottom: 0,
    height: hp(100),
    width: wp(100),
    backgroundColor: allColors.WHITE,
    borderRadius: radius.noRadius,
    borderTopEndRadius: radius.medium,
    borderTopStartRadius: radius.medium,
    // borderColor: '#000'
    borderWidth: 0.4,
    overflow: 'hidden',
  },
  mainView: {
    flex: 1,
  },

  textStyle: (color, small) => {
    return {
      fontSize: small ? 12 : 18,
      color: color,
      textAlign: positions.center,
    };
  },
});
