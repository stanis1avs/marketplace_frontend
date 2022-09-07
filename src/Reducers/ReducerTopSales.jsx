import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const ReducerTopSales = createSlice({
  name: 'ReducerTopSales',
  initialState: initialState,
  reducers: {
    tsRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    tsSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    tsFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
}})

export const { tsRequest, tsSusccess, tsFailure } = ReducerTopSales.actions;
export default ReducerTopSales.reducer;