import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  categoryId: 0,
  offset: 6
};

export const ReducerCatalog = createSlice({
  name: 'ReducerCatalog',
  initialState: initialState,
  reducers: {
    catalogRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    catalogSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    catalogFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    },

    selectCategory(state, action) {
      const categoryId = action.payload;
      return {
        ...state,
        categoryId,
        offset: 6
      };
    },

    updateOffset(state, action) {
      const offset = state.offset + action.payload;
      return {
        ...state,
        offset,
      };
    },
}})

export const { catalogRequest, catalogSusccess, catalogFailure, selectCategory, updateOffset } = ReducerCatalog.actions;
export default ReducerCatalog.reducer;