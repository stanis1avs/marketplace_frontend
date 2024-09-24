import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
  loading: false,
  error: null,
  countSizes: null,
};

export const ReducerCatalogId = createSlice({
  name: 'ReducerCatalogId',
  initialState: initialState,
  reducers: {
    catalogIdRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    catalogIdSusccess(state, action) {
      const item = action.payload;
      return {
        ...state,
        item,
        countSizes: item.sizes.filter((e) => e.available === true).length,
        loading: false,
        error: null,
      };
    },

    catalogIdFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    },

}})

export const { catalogIdRequest, catalogIdSusccess, catalogIdFailure } = ReducerCatalogId.actions;
export default ReducerCatalogId.reducer;