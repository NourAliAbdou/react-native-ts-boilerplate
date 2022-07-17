import React, { FC, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-animatable';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { typography, allColors, appStyles } from '@constants';

import { radius } from '@constants/dimensions';
import { useTheme } from '@constants/theme/AppThemeProvider';
export interface Props {
  no: boolean;
  item: string;
}
const OccupationCard: FC<Props> = (props): ReactElement => {
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.container,
        isDark && styles.dark,
        props.no && styles.auto,
      ]}>
      <Text numberOfLines={3} style={styles.nameStyle}>
        {`${props?.item}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.circle,
    // elevation: 2,

    backgroundColor: allColors.ROSEGOLD,
    width: wp(30),
    height: wp(10),
    overflow: 'hidden',
    marginRight: wp(2),
    ...appStyles.CenterContent,
    paddingVertical: 3,
    paddingHorizontal: 20,
  },

  nameStyle: {
    ...typography.TextBold11,
    textAlign: 'center',
  },
  dark: { backgroundColor: '#fce9e6' },
  auto: { width: 'auto' },
});

export default OccupationCard;
