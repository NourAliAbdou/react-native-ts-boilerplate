import { createSlice } from '@reduxjs/toolkit';
import { homeData } from 'src/types/api_types';
interface homeState {
  loadingGetHome: boolean;
  currentCharacter: homeData;
  characters: Array<homeData>;
  filteredCharacters: Array<homeData>;
  sortedCharacters: Array<homeData>;
}

const initialState: homeState = {
  loadingGetHome: false,
  currentCharacter: {
    char_id: 0,
    name: '',
    nickname: '',
    birthday: '',
    occupation: [],
    appearance: [],
    img: '',
    status: '',
    portrayed: '',
    category: '',
    better_call_saul_appearance: [],
  },
  characters: [],
  filteredCharacters: [],
  sortedCharacters: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoadingHomeGet: (state, action) => {
      state.loadingGetHome = action.payload;
    },
    setHome: (state, action) => {
      state.characters = action.payload;
      state.filteredCharacters = action.payload;
      state.sortedCharacters = action.payload;
    },
    setFilteredCharacters: (state, action) => {
      state.filteredCharacters = action.payload;
      state.sortedCharacters = action.payload;
    },
    setSortedCharacters: (state, action) => {
      state.sortedCharacters = action.payload;
    },
    setCurrentCharacter: (state, action) => {
      state.currentCharacter = action.payload;
    },
  },
});

export default homeSlice.reducer;
