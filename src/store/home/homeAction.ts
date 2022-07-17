import { getHome } from '@api';
import { thumbnailsScroll } from '@components/lists';
import { store } from '@store';
import { homeSlice } from './homeSlice';

export const {
  setLoadingHomeGet,
  setHome,
  setCurrentCharacter,
  setFilteredCharacters,
  setSortedCharacters,
} = homeSlice.actions;

export const GetHome = () => {
  return async (dispatch: any) => {
    dispatch(setLoadingHomeGet(true));
    try {
      const result: any = await getHome();
      dispatch(setLoadingHomeGet(false));
      if (result?.length > 0) {
        dispatch(setHome(result));
      } else {
        dispatch(setHome([]));
      }
    } catch (errorHome) {
      dispatch(setHome([]));
      dispatch(setLoadingHomeGet(false));
    }
  };
};

export const ApplyFilterByName = (name: string) => {
  return async (dispatch: any) => {
    const {
      home: { characters },
    } = store.getState();
    const result = characters?.filter(
      c =>
        c.name?.toLowerCase()?.includes(name?.toLowerCase()) ||
        c.nickname?.toLowerCase()?.includes(name?.toLowerCase()),
    );
    thumbnailsScroll?.current?.scrollToIndex({ index: 0 });
    dispatch(setFilteredCharacters(result));
  };
};
export const ResetFiltering = () => {
  return async (dispatch: any) => {
    const {
      home: { characters },
    } = store.getState();
    thumbnailsScroll?.current?.scrollToIndex({ index: 0 });
    dispatch(setFilteredCharacters(characters));
    return true;
  };
};
export const ApplySorting = () => {
  return async (dispatch: any) => {
    const {
      home: { filteredCharacters },
    } = store.getState();
    const temp = filteredCharacters;
    const result = temp
      ?.slice()
      ?.sort((a, b) => a?.appearance?.length - b?.appearance?.length);
    thumbnailsScroll?.current?.scrollToIndex({ index: 0 });
    dispatch(setSortedCharacters(result));
  };
};
export const ResetSorting = () => {
  return async (dispatch: any) => {
    const {
      home: { filteredCharacters },
    } = store.getState();
    thumbnailsScroll?.current?.scrollToIndex({ index: 0 });
    dispatch(setSortedCharacters(filteredCharacters));
  };
};
