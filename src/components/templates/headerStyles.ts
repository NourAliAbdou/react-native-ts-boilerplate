import { StyleSheet } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { allColors, typography, appStyles } from '@constants';
import { positions } from '@constants/dimensions';

export default StyleSheet.create({
  button: {
    padding: 5,
    position: 'relative',
    width: '10%',
  },
  title: color => {
    return {
      ...typography.TextExtraBold16,
      color: color,
      textAlign: 'left',
    };
  },
  headerStyle: {
    flexDirection: 'row',
    height: hp(7),
    backgroundColor: '#70707050', //allColors.WHITE,
    alignItems: positions.center,
    justifyContent: positions.center,
    marginBottom: hp(2),
  },
  headerTextStyle: {
    ...typography.TextBold12,
    color: allColors.PRIMARY,
  },
  navBar: {
    ...appStyles.navBar,
    borderWidth: 0,
  },

  container: {
    // height: 78,

    flexDirection: 'row',
    margin: 16,
    marginBottom: 10,
    elevation: 8,
    // paddingBottom: 4,
  },

  content: {
    marginLeft: 4,
    // justifyContent: 'space-between',
  },
  name: {
    ...typography.TextRegular,
    fontSize: 16,
    lineHeight: 26,
    color: allColors.SPACEGRAY,
  },
  lastMessage: {
    marginBottom: 4,
    flex: 1,
    flexWrap: 'wrap',
    color: allColors.MUTED,
    fontSize: 13,
  },
  textInput: (color: string) => {
    return {
      color: color,
      ...typography.TextRegular10,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: allColors.MUTED,
      marginEnd: widthPercentageToDP(4),
    };
  },
  reset: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 5,
  },
  goldReset: { color: allColors.GOLD, textDecorationLine: 'underline' },
  mainTitle: { flexDirection: 'row', justifyContent: 'space-between' },
  topNav: (color: string) => {
    return {
      backgroundColor: color,
      paddingTop: hp(5),
    };
  },
});
