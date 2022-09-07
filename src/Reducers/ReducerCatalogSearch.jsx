import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogSearch: ''
};

export const ReducerCatalogSearch = createSlice({
  name: 'ReducerCatalogSearch',
  initialState: initialState,
  reducers: {
    onChangeCatalogSearch(state, action) {
      const catalogSearch = action.payload;
      return {
        catalogSearch
      };
    },

    reset() {
      return {
        catalogSearch: ''
      };
    }
}})

export const { onChangeCatalogSearch, reset } = ReducerCatalogSearch.actions;
export default ReducerCatalogSearch.reducer;