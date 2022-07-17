module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@Src': './src',
          '@api': ['./src/api'],
          '@store': ['./src/store'],
          '@utils': ['./src/utils'],
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@config': './src/config',
          '@assets': ['./src/assets'],
          '@screens': ['./src/screens'],
        },
      },
    ],
    'jest-hoist',
  ],
};
