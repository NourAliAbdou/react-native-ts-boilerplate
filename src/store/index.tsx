import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeReducer from './home/homeSlice';

// import Reducer from './/Slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['home'],
};
const rootReducer = combineReducers({
  home: homeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));

const persistor = persistStore(store);

export { store, persistor };

export * from './home/homeSlice';
export * from './home/homeState';
export * from './home/homeAction';
// export * from './/Slice';
