/**
 * @format
 * @flow
 */
import { arrowSVG } from '@constants/svg';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { SvgXml } from 'react-native-svg';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.iconContainerStyle}>
          <SvgXml xml={arrowSVG} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    // bottom: 5,
    top: heightPercentageToDP(7),
    right: widthPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP(10),
    zIndex: 4444000,
  },
  iconContainerStyle: {
    height: 50,
    width: 50,
    borderRadius: 20,
    transform: [
      {
        rotateZ: '90deg',
      },
      {
        scaleX: I18nManager.isRTL ? -1 : 1,
      },
    ],
  },
});
