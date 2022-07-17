import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingVertical: wp(3),
    // backgroundColor: 'red',
  },
  View: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: 200,
    margin: 20,
  },
  ItemSliderImage: {
    overflow: 'scroll',
    height: hp(30),
    width: wp(100),
  },
});
