import {sendItemsRequest, sendItemsSuccess, sendItemsFailure} from '../Reducers/ReducerCart'

export const postItem = (order) => async (dispatch) => {
  const phone = order.phone
  const address = order.address
  const items = order.items
  dispatch(sendItemsRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_SEND_ORDER}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {owner: {phone, address}, items} ),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(sendItemsSuccess());
  } catch (error) {
    dispatch(sendItemsFailure());
  }
}