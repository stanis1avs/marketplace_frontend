import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import ReducerCategoryItems from '../Reducers/ReducerCategoryItems';
import ReducerTopSales from '../Reducers/ReducerTopSales';
import ReducerCatalog from '../Reducers/ReducerCatalog';
import ReducerCatalogId from '../Reducers/ReducerCatalogId';
import ReducerCatalogSearch from '../Reducers/ReducerCatalogSearch';
import ReducerCart from '../Reducers/ReducerCart';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./localStorage";

const reducer = combineReducers({
  ReducerCategoryItems,
  ReducerTopSales,
  ReducerCatalog,
  ReducerCatalogSearch,
  ReducerCatalogId,
  ReducerCart
});

const store = configureStore({
  reducer: reducer,
  preloadedState: { ReducerCart: loadFromLocalStorage("ReducerCart") },
  middleware: [thunk]
})

store.subscribe(() => {
  saveToLocalStorage("ReducerCart", store.getState().ReducerCart);
});

export default store;