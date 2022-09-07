import { catalogRequest, catalogSusccess, catalogFailure } from '../Reducers/ReducerCatalog';

export const fetchSearch = (input) => async (dispatch) => {
  dispatch(catalogRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_SEARCH}${input}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(catalogSusccess(data));
  } 
  catch (error) {
    dispatch(catalogFailure(error.message));
  }
}