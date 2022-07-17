import React, { FC, ReactElement, useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native';
import Layout from '@components/templates/Layout';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from '@constants/theme/AppThemeProvider';
import { useFocusEffect } from '@react-navigation/core';
import { loadingHomeSelector, GetHome, sortedCharactersSelector } from '@store';
import { RowProductsList } from '@components/lists';
import EmptyContent from '@components/elements/EmptyContent';

const HomeScreen: FC<{}> = (): ReactElement => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const loadingGet = useSelector(loadingHomeSelector);
  const characters = useSelector(sortedCharactersSelector);

  const _fetchCharacters = useCallback(async () => {
    dispatch(GetHome());
  }, [dispatch]);
  useEffect(() => {
    _fetchCharacters();
  }, [_fetchCharacters]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <Layout color={colors.background} loading={loadingGet}>
      <RowProductsList
        data={characters}
        ListEmptyComponent={!loadingGet && <EmptyContent empty />}
        onRefresh={_fetchCharacters}
        refreshing={false}
        pagingEnabled={true}
      />
    </Layout>
  );
};

export default HomeScreen;
