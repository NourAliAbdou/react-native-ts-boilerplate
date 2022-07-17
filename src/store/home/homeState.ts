import { RootState } from '../index';

export const loadingHomeSelector = (state: RootState) =>
  state.home.loadingGetHome;
export const sortedCharactersSelector = (state: RootState) =>
  state.home.sortedCharacters;
export const currentCharacterSelector = (state: RootState) =>
  state.home.currentCharacter;
