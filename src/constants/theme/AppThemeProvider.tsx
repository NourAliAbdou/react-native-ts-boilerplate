import * as React from 'react';
import { lightColors, darkColors, Colors } from './colorThemes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Theme {
  isDark: boolean;
  colors: Colors;
  setScheme: (val: 'dark' | 'light') => void;
}

export const ThemeContext = React.createContext<Theme>({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const AppThemeProvider: React.FC<{}> = props => {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  React.useEffect(() => {
    AsyncStorage.getItem('theme').then((theme: string | null) => {
      setIsDark(
        // currentTheme === 'dark' ? true : false,
        theme === 'dark' ? true : false,
      );
    });
  }, []);

  const defaultTheme: Theme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
