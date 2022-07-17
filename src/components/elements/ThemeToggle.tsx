import React, { FC, ReactElement } from 'react';

import { Switch } from 'react-native';
import { View } from 'react-native-animatable';
import { useTheme } from '@constants/theme/AppThemeProvider';
import { Block } from '@components';

import { saveToStorage } from '@utils/StorageMethods';
import { allColors } from '@constants';
const main = {
  bottom: -5,
  flexDirection: 'row',
};

const ThemeToggle: FC<{}> = (): ReactElement => {
  const { setScheme, isDark } = useTheme();

  const toggleScheme = async () => {
    isDark ? setScheme('light') : setScheme('dark');
    isDark
      ? await saveToStorage('theme', 'light')
      : await saveToStorage('theme', 'dark');
  };

  return (
    <View style={{}}>
      <Block style={main}>
        <View style={{}}>
          <Switch
            value={isDark}
            onValueChange={toggleScheme}
            thumbColor={allColors.WHITE}
            trackColor={{
              false: allColors.GRAY,
              true: allColors.GOLD,
            }}
          />
        </View>
      </Block>
    </View>
  );
};

export default ThemeToggle;
