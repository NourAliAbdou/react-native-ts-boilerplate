import React, { FC, ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import {
  StyleSheet,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from 'react-native-animatable';

import { useNavigation } from '@react-navigation/core';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { typography, allColors, isRTL } from '@constants';
import { Block } from '@components';

import { border, positions, radius } from '@constants/dimensions';
import { ScreensNames } from '@constants/ScreensNames';
import { setCurrentCharacter } from '@store';
import { homeData } from 'src/types/api_types';

interface Props {
  item?: homeData;
}

const HomeCard: FC<Props> = (props): ReactElement => {
  const navigation = useNavigation();
  const animation = new Animated.Value(0);

  const dispatch = useDispatch();
  const onclick = () => {
    dispatch(setCurrentCharacter(props.item));
    navigation.navigate(ScreensNames.NAVIGATION_DETAILS_SCREEN);
  };

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      key={props?.item?.char_id}
      activeOpacity={1}
      onPress={onclick}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <ImageBackground
        source={{ uri: props.item.img }}
        style={styles.container('#70707050')}>
        <Block style={styles.innerContainer}>
          <View style={styles.numberContainerStyle}>
            <Text style={styles.nameStyle}>
              {`${props?.item?.name} ${props?.item?.nickname}`}
            </Text>
          </View>
        </Block>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (color: string) => {
    return {
      borderRadius: radius.minmum,
      borderWidth: border.thick,
      borderColor: color,
      // elevation: 2,

      marginBottom: wp(10),
      backgroundColor: '#70707020',
      width: wp(90),
      height: hp(70),
      overflow: 'hidden',
    };
  },
  innerContainer: {
    // marginTop: wp(25),
    // marginStart: wp(0.5),
    width: '100%',
    height: '100%',
    backgroundColor: allColors.CustomBlack + '80',
    justifyContent: positions.flex_end,
    paddingBottom: wp(5),
  },
  numberContainerStyle: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    width: '90%',
    // textAlign: 'center',
    justifyContent: positions.center,
    alignItems: positions.center,
    alignSelf: positions.center,
  },
  nameStyle: {
    color: 'white',
    ...typography.TextRegular12,
    textAlign: 'center',
  },
});

export default HomeCard;
