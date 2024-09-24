import {sendItemsRequest, sendItemsSuccess, sendItemsFailure} from '../Reducers/ReducerCart'

export const postItem = (order) => async (dispatch) => {
  const {phone, address, items} = order
  dispatch(sendItemsRequest());
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEND_ORDER}`, {
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