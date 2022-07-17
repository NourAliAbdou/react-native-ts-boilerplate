import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

const REGULAR = 'ZillaSlab-Regular';
const Bold = 'ZillaSlab-Bold';
const SEMIBold = 'ZillaSlab-SemiBold';
const EXTRABold = 'ZillaSlab-Bold';
const MEDIUM = 'ZillaSlab-Medium';
const PRIMARY = 'ZillaSlab-Light';

export default {
  TextBold10: {
    fontSize: wp('3%'),
    lineHeight: wp('5%'),

    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold11: {
    fontSize: wp('3.5%'),
    lineHeight: wp('4.5%'),
    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold12: {
    fontSize: wp('4%'),
    lineHeight: wp('6%'),

    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold13: {
    fontSize: wp('4.5%'),
    lineHeight: wp('5.5%'),

    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold14: {
    fontSize: wp('5%'),
    lineHeight: wp('6%'),
    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold16: {
    fontSize: wp('6%'),
    lineHeight: wp('7.5%'),

    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBold18: {
    fontSize: wp('7%'),
    // lineHeight: wp('8.5%'),
    fontFamily: Bold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold12: {
    fontSize: wp('4%'),
    lineHeight: wp('6%'),
    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold13: {
    fontSize: wp('4.5%'),
    lineHeight: wp('6%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold14: {
    fontSize: wp('5%'),
    lineHeight: wp('6%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold16: {
    fontSize: wp('6%'),
    lineHeight: wp('7%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold18: {
    fontSize: wp('7%'),
    lineHeight: wp('8%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold20: {
    fontSize: wp('8%'),
    lineHeight: wp('9%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraBold22: {
    fontSize: wp('9%'),
    lineHeight: wp('10%'),

    fontFamily: EXTRABold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextBlack: {
    // fontSize: wp('4%'),
    fontFamily: SEMIBold,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },

  TextInputHelp: {
    fontSize: wp('3%'),
    fontFamily: MEDIUM,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
    // fontStyle: 'italic',
  },
  TextExtraLight6: {
    fontSize: wp('1%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight8: {
    fontSize: wp('2%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight10: {
    fontSize: wp('3%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight12: {
    fontSize: wp('4%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight14: {
    fontSize: wp('5%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight16: {
    fontSize: wp('6%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight18: {
    fontSize: wp('7%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextExtraLight20: {
    fontSize: wp('8%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight6: {
    fontSize: wp('1%'),
    lineHeight: wp('2%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight8: {
    fontSize: wp('2%'),
    lineHeight: wp('3%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight10: {
    fontSize: wp('3%'),
    lineHeight: wp('4.5%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight11: {
    fontSize: wp('3.5%'),
    lineHeight: wp('5.5%'),
    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight12: {
    fontSize: wp('4%'),
    lineHeight: wp('5%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight13: {
    fontSize: wp('4.5%'),
    lineHeight: wp('5.5%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight14: {
    fontSize: wp('5%'),
    lineHeight: wp('6%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight16: {
    fontSize: wp('6%'),
    lineHeight: wp('7%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight18: {
    fontSize: wp('7%'),
    lineHeight: wp('8%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextLight20: {
    fontSize: wp('8%'),
    lineHeight: wp('9%'),

    fontFamily: PRIMARY,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextMedium: {
    // fontSize: wp('4%'),
    fontFamily: MEDIUM,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextHeader: {
    fontSize: wp('6%'),
    lineHeight: wp('7%'),
    fontFamily: SEMIBold,
    textAlign: 'left',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular: {
    fontSize: wp('3%'),
    lineHeight: wp('6%'),
    fontFamily: REGULAR,
    textAlign: 'auto',
  },
  TextRegular10: {
    fontSize: wp('3%'),
    lineHeight: wp('4%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular11: {
    fontSize: wp('3.5%'),
    lineHeight: wp('4.5%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular12: {
    fontSize: wp('4%'),
    lineHeight: wp('5.5%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular13: {
    fontSize: wp('4.5%'),
    lineHeight: wp('6%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular14: {
    fontSize: wp('5%'),
    lineHeight: wp('6%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular16: {
    fontSize: wp('6%'),
    lineHeight: wp('7%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
  TextRegular18: {
    fontSize: wp('7%'),
    lineHeight: wp('8%'),

    fontFamily: REGULAR,
    textAlign: 'auto',
    paddingTop: Platform.OS === 'ios' ? wp(1) : 0,
  },
};
