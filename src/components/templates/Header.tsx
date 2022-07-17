import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { typography } from '@constants';
import { useTheme } from '@constants/theme/AppThemeProvider';
import styles from './headerStyles';
import {
  ApplyFilterByName,
  ApplySorting,
  ResetSorting,
  ResetFiltering,
  sortedCharactersSelector,
} from '@store';
import { useDispatch, useSelector } from 'react-redux';
import ThemeToggle from '@components/elements/ThemeToggle';
import Block from '@components/elements/Block';

export interface Props {
  children?: any;
}
const Header: FC<Props> = props => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const characters = useSelector(sortedCharactersSelector);

  function renderTitle() {
    return (
      <View style={[styles.content, styles.mainTitle]}>
        <Text style={[styles.title(colors.text)]}>
          {'Breaking Bad Characters'}
        </Text>
        <ThemeToggle />
      </View>
    );
  }
  const resetFilter = () => {
    setInputValue();
    dispatch(ResetFiltering());
  };
  function renderFilterByNameInput() {
    return (
      <Block row space={'between'}>
        <Block row>
          <TextInput
            placeholder="filter By Name"
            placeholderTextColor={colors.text}
            style={styles.textInput(colors.text)}
            onSubmitEditing={(e: string) => {
              dispatch(ApplyFilterByName(e.nativeEvent.text));
            }}
            value={inputValue}
            onChangeText={setInputValue}
            returnKeyType="next"
          />
          <Text style={typography.TextRegular}>
            {`(${characters?.length})`}
          </Text>
        </Block>
        <TouchableOpacity onPress={resetFilter}>
          <View style={styles.reset}>
            <View style={styles.content}>
              <Text>
                <Text style={[styles.name, styles.goldReset]}>{'Reset'}</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Block>
    );
  }
  const resetSort = () => {
    dispatch(ResetSorting());
  };
  function renderSortFunc() {
    return (
      <Block row space={'between'}>
        <TouchableOpacity
          onPress={() => {
            dispatch(ApplySorting());
          }}>
          <View style={styles.reset}>
            <View style={styles.content}>
              <Text>
                <Text style={[styles.name, { color: colors.text }]}>
                  {'Sort by season appearance'}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetSort}>
          <View style={styles.reset}>
            <View style={styles.content}>
              <Text>
                <Text style={[styles.name, styles.goldReset]}>{'Reset'}</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Block>
    );
  }
  return (
    <View style={styles.topNav(colors.background)}>
      <View style={[styles.navBar]}>
        {renderTitle()}

        {renderFilterByNameInput()}
        {renderSortFunc()}
      </View>
      {props.children}
    </View>
  );
};

export default Header;
