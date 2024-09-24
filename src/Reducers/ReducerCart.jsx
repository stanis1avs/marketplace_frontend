import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  loading: false,
  status: null
};

export const ReducerCart = createSlice({
  name: 'ReducerCart',
  initialState: initialState,
  reducers: {
    cartAdd(state, action) {
      const items = [...state.items]
      items.push(action.payload)
      const total = items.reduce((sum, item) => sum + item.result, 0)
      return {
        ...state,
        items,
        total
      }
    },
    cartReset() {
      return initialState
    },
    cartDelete(state, action) {
      const items = [...state.items]
      items.splice(action.payload, 1);
      return {
        ...state,
        status: null,
        total: 0,
        items
      }
    },
    sendItemsRequest(state) {
      const status = 'Оформляем покупку, пожалуйста подождите'
      return {
        ...state,
        status,
        loading: true
      }
    },
    sendItemsSuccess(state) {
      const status = 'Заказ успешно оформлен, спасибо за покупку!'
      return {
        ...state,
        status,
        loading: false
      }
    },
    sendItemsFailure(state) {
      const status = 'Что-то пошло не так, пожалуйста попробуйте позже!'
      return {
        ...state,
        status,
        loading: false,
      }
    }
}})

export const { cartAdd, cartDelete, cartReset, sendItemsRequest, sendItemsSuccess, sendItemsFailure } = ReducerCart.actions;
export default ReducerCart.reducer;