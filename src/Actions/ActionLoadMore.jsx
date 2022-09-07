import { catalogRequest, catalogSusccess, catalogFailure } from '../Reducers/ReducerCatalog';

export const fetchLM = (offset, id) => async (dispatch) => {
  dispatch(catalogRequest());
  if (id) {
    try {  
      const response = await fetch(`${process.env.REACT_APP_LOAD_MORE}${offset}&categoryId=${id}`);
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
  else {
    try {  
      const response = await fetch(`${process.env.REACT_APP_LOAD_MORE}${offset}`);
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
}