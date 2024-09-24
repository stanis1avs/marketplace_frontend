import { catalogIdRequest, catalogIdSusccess, catalogIdFailure } from '../Reducers/ReducerCatalogId';

export const fetchCatalogId = (id) => async (dispatch) => {
  dispatch(catalogIdRequest());
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ITEM}${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(catalogIdSusccess(data));
  }
  catch (error) {
    dispatch(catalogIdFailure(error.message));
  }
}