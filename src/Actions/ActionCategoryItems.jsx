import { ciRequest, ciSusccess, ciFailure } from '../Reducers/ReducerCategoryItems';

export const fetchCI = async (dispatch) => {
  dispatch(ciRequest());
  try {
    const response = await fetch(process.env.REACT_APP_CATEGORIES_CATALOG);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(ciSusccess(data));
  } 
  catch (error) {
    dispatch(ciFailure(error.message));
  }
}