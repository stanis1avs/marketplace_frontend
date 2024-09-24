import { catalogRequest, catalogSusccess, catalogFailure } from '../Reducers/ReducerCatalog';

export const fetchCatalog = async (dispatch) => {
  dispatch(catalogRequest());
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_TOP_ITEMS);
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