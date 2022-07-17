import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import allColors from './allColors';
import typography from './typography';

import { border, radius, boxHight, positions } from './dimensions';
export default {
  parentModalStyle: {
    height: '100%',
    width: '100%',
    justifyContent: positions.flex_end,
    alignItems: 'center',
    backgroundColor: allColors.Transparent,
  },
  childModalStyle: height => {
    return {
      elevation: 8,
      height: height,
      width: '100%',
      justifyContent: positions.flex_start,
      alignSelf: 'center',
      backgroundColor: allColors.WHITE,
      borderRadius: radius.noRadius,
      borderTopRightRadius: radius.minmum,
      borderTopLeftRadius: radius.minmum,
      borderWidth: border.thin,
      borderColor: allColors.PRIMARY,
    };
  },
  textShadowDark: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },
  textShadowLight: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#fff',
  },
  textShadowGold: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: allColors.GOLD,
  },

  navBar: {
    width: 'auto',
    height: hp(20), //.125,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: wp(2),
    paddingTop: wp(2),
    zIndex: 5,
    opacity: 1,
    paddingHorizontal: wp(5),
  },

  modalDivider: {
    width: wp(10),
    alignSelf: 'center',
    marginVertical: hp(2),
    height: 1,
    backgroundColor: allColors.MUTED,
  },
  divider: {
    backgroundColor: allColors.WHITE,
    height: border.thin,
    marginVertical: wp(3),
    opacity: 0.4,
  },

  buttonStyle: {
    justifyContent: 'center',
    borderRadius: radius.medium,
    borderColor: allColors.YELLOW,
    backgroundColor: allColors.YELLOW,
    borderWidth: border.noborder,
    height: boxHight.normal,
    // width: wp(90),
    elevation: 5,
    marginVertical: 20,
    // paddingTop: wp(1),
  },

  textButttonStyle: {
    ...typography.ButtonText,
    color: allColors.DARKBLUE,
    marginHorizontal: 13,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  listStyle: {
    backgroundColor: allColors.Transparent,

    paddingHorizontal: wp(1),
    // width: wp(95),
  },
  CenterContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CenterContentRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CenterBottomContent: {
    justifyContent: positions.flex_end,
    alignItems: 'center',
  },
  CenterBottomLeftContent: {
    justifyContent: positions.flex_end,
    alignItems: positions.flex_end,
  },
  CenterBottomRightContent: {
    justifyContent: positions.flex_end,
    alignItems: 'flex-start',
  },
  CenterLeftContent: {
    justifyContent: 'center',
    alignItems: positions.flex_end,
  },
  CenterRightContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  CenterTopContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  CenterRightTopContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  CenterText: {
    textAlign: 'center',
  },
};
