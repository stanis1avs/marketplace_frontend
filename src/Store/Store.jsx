import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import ReducerTopSales from '../Reducers/ReducerTopSales';
import ReducerCatalog from '../Reducers/ReducerCatalog';
import ReducerCatalogId from '../Reducers/ReducerCatalogId';
import ReducerCatalogSearch from '../Reducers/ReducerCatalogSearch';
import ReducerCart from '../Reducers/ReducerCart';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['ReducerCart'],
};

const reducer = combineReducers({
  ReducerTopSales,
  ReducerCatalog,
  ReducerCatalogSearch,
  ReducerCatalogId,
  ReducerCart
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store);

export default store;