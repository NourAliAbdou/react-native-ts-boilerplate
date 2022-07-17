import { allColors, typography } from '@constants';
import { positions, radius } from '@constants/dimensions';
import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: (color: string) => {
    return {
      borderColor: color,
      // elevation: 2,

      backgroundColor: '#70707020',
      width: wp(100),
      height: hp(40),
      overflow: 'hidden',
      borderBottomRightRadius: radius.maximum,
      borderBottomLeftRadius: radius.maximum,
    };
  },
  backgroundImage: {
    backgroundColor: '#70707020',
    width: '100%',
    height: hp(100),
    overflow: 'hidden',
  },
  innerContainer: {
    // marginTop: wp(25),
    // marginStart: wp(0.5),
    width: '100%',
    height: '100%',
    backgroundColor: allColors.CustomBlack + '90',
    justifyContent: positions.center,
    paddingBottom: wp(5),
    alignItems: positions.center,
  },
  image: {
    overflow: 'scroll',
    height: wp(35),
    width: wp(35),
    resizeMode: 'contain',
    borderRadius: radius.circle,
  },
  name: {
    color: allColors.LIGHTBLUE,
    ...typography.TextRegular12,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    color: allColors.GRAY,
    ...typography.TextRegular14,
    textAlign: 'left',
    marginTop: 5,
  },
  text: {
    color: allColors.SPACEGRAY,
    ...typography.TextRegular12,
    textAlign: 'center',
    marginTop: 20,
  },
});
