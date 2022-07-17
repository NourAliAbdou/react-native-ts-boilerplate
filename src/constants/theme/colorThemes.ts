import allColors from '../allColors';
import colors from '../allColors';

export const lightColors = {
  background: colors.LightBackground,
  primary: '#512DA8',
  text: '#121212',
  error: '#D32F2F',
  cardBackgroung: allColors.LightCardBackground,
  cardText: allColors.DARKGRAY,
  header: allColors.LightHeader,
  search: allColors.LightHeader,
  bottomBar: '#122B47',
  bottomBarBackground: colors.WHITE,
  price: allColors.RED,
  puretext: allColors.DarkCardBackground,
  email: allColors.DARKBLUE,
  mute: colors.LightGRAY,
};

export const darkColors = {
  background: colors.DarkBackground,
  primary: '#B39DDB',
  text: '#FFFFFF',
  error: '#EF9A9A',
  cardBackgroung: allColors.DarkCardBackground,
  cardText: allColors.WHITE,
  header: allColors.DarkHeader,
  search: allColors.WHITE,
  bottomBar: allColors.LightBackground,
  bottomBarBackground: colors.DarkHeader,

  price: allColors.WHITE,
  puretext: allColors.LightBackground,
  email: allColors.LightBackground,
  mute: colors.DarkCardBackground,
};

export type Colors = typeof lightColors;
