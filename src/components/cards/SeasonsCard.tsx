import React, { FC, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-animatable';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { typography, allColors, appStyles } from '@constants';

import { useTheme } from '@constants/theme/AppThemeProvider';
import { radius } from '@constants/dimensions';

interface Props {
  item?: string;
}

const SeasonsCard: FC<Props> = (props): ReactElement => {
  const { isDark } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.dark]}>
      <Text style={styles.nameStyle}>{`${props?.item}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.circle,
    // elevation: 2,

    backgroundColor: allColors.ROSEGOLD,
    width: wp(10),
    height: wp(10),
    overflow: 'hidden',
    marginRight: wp(2),
    ...appStyles.CenterContent,
  },

  nameStyle: {
    ...typography.TextBold13,
    textAlign: 'center',
  },
  dark: { backgroundColor: '#fce9e6' },
});

export default SeasonsCard;
