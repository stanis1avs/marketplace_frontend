import { tsRequest, tsSusccess, tsFailure } from '../Reducers/ReducerTopSales';

export const fetchTS = async (dispatch) => {
  dispatch(tsRequest());
  try {
    const response = await fetch(process.env.REACT_APP_TOP_SALES);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(tsSusccess(data));
  } 
  catch (error) {
    dispatch(tsFailure(error.message));
  }
}