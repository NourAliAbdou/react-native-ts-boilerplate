import React, { FC } from 'react';
import { View, Text } from 'react-native-animatable';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import allColors from '@constants/allColors';
import { SvgXml } from 'react-native-svg';
import { typography } from '@constants';
import { StyleSheet } from 'react-native';
import { emptySVG } from '@constants/svg';

interface Props {
  purchase?: boolean;
  personalInfo?: boolean;
  items?: boolean;
  smgWrong?: boolean;
  empty?: boolean;
}

const EmptyContent: FC<Props> = props => {
  function renderEmpty() {
    return (
      <View style={styles.emptyviewStyle}>
        <SvgXml xml={emptySVG} width={wp(80)} />
        <Text style={typography.TextRegular11}>No items found</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>{props.empty && renderEmpty()}</View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: allColors.Transparent,
    justifyContent: 'flex-start',
  },
  emptyviewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(50),
  },
});
export default EmptyContent;
