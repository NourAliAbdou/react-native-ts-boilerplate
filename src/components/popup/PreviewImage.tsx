/**
 * @format
 * @flow
 */

import React, { FC, ReactElement } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native-animatable';
import Image from '../elements/Image';
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRoute } from '@react-navigation/core';
import BackButton from '@components/elements/BackButton';

const PreviewImage: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <>
        <View style={styles.main}>
          <Image source={{ uri: route.params?.uri }} style={styles.image} />
        </View>
        <BackButton />
      </>
    </TouchableWithoutFeedback>
  );
};

export default PreviewImage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: wp(100),
    height: wp(100),
    resizeMode: 'contain',
  },
});
