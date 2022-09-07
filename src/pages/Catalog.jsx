import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCatalog } from "../Actions/ActionCatalog";
import Product from './Product'
import Loader from "./Loader";

export default function Catalog() {
  const { items, loading, error } = useSelector(
    (state) => state.ReducerCatalog
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {items &&
        <div className="row">
          {items.map((el) => {
            return (
              <div className="col-4" key={el.id}>
                <div className="card catalog-item-card">
                  <Product product={el}/>
                </div>
              </div>
            )}
          )}
        </div>
      }
      {loading && <Loader />}
      {error && <h2 className="text-center">Ошибка. Попробуйте еще раз.</h2>}
    </>
  )
}