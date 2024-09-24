import { catalogRequest, catalogSusccess, catalogFailure } from '../Reducers/ReducerCatalog';

export const fetchCL = (id) => async (dispatch) => {
  dispatch(catalogRequest());
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CATEGORI_ITEMS}${id}`);
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