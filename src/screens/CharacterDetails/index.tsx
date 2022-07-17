import React, { FC, ReactElement } from 'react';
import { BackHandler, TouchableOpacity, ImageBackground } from 'react-native';
import { Text as TextA, View } from 'react-native-animatable';
import Layout from '@components/templates/Layout';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from '@constants/theme/AppThemeProvider';
import { useFocusEffect } from '@react-navigation/core';
import { currentCharacterSelector } from '@store';
import CustomImage from '@components/elements/Image';
import styles from './styles';
import { ScreensNames } from '@constants/ScreensNames';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalList } from '@components/lists';
import { BackButton, Block } from '@components';

const CharacterDetails: FC<{}> = (): ReactElement => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const currentCharacter = useSelector(currentCharacterSelector);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation]),
  );

  const onclick = () => {
    navigation.navigate(ScreensNames.PreviewImage, {
      uri: currentCharacter.img,
    });
  };

  // birthday: string;
  // occupation: Array<string>;
  // status: string;
  const renderSeasons = () => (
    <>
      <TextA style={styles.title}>Seasons appearance:</TextA>
      {currentCharacter.appearance?.length === 0 ? (
        <HorizontalList data={['No appearance yet']} occupation no />
      ) : (
        <HorizontalList data={currentCharacter.appearance} />
      )}
    </>
  );

  const renderElement = (key, value) => (
    <View>
      <TextA style={styles.title}>{key}</TextA>
      <HorizontalList data={value} occupation />
    </View>
  );
  return (
    <Layout color={colors.background} loading={false} scroll>
      <ImageBackground
        source={{
          uri: 'https://www.usmagazine.com/wp-content/uploads/2020/08/Breaking-Bad-Where-Are-They-Now.jpg?w=1600&quality=86&strip=all',
        }}
        style={styles.container('#70707050')}
        blurRadius={9}
        resizeMode={'cover'}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={onclick} activeOpacity={1}>
            <CustomImage
              source={{ uri: currentCharacter.img }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TextA style={styles.name}>
            {`${currentCharacter.name} ${currentCharacter.nickname}`}
          </TextA>
        </View>
        <BackButton />
      </ImageBackground>
      <ScrollView
        style={{
          paddingHorizontal: widthPercentageToDP(5),
          paddingTop: widthPercentageToDP(5),
        }}>
        <Block row space={'between'}>
          {renderElement('Status:', [currentCharacter.status])}
        </Block>

        {renderSeasons()}

        {currentCharacter.occupation?.length > 0 &&
          renderElement('Occupation:', currentCharacter.occupation)}
        {currentCharacter.better_call_saul_appearance?.length > 0 &&
          renderElement(
            'Better call saul appearance:',
            currentCharacter.better_call_saul_appearance,
          )}
      </ScrollView>
    </Layout>
  );
};

export default CharacterDetails;
