import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const ReducerCategoryItems = createSlice({
  name: 'ReducerCategoryItems',
  initialState: initialState,
  reducers: {
    ciRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    ciSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    ciFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
}})

export const { ciRequest, ciSusccess, ciFailure } = ReducerCategoryItems.actions;
export default ReducerCategoryItems.reducer;