import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchTS } from "@/Actions/ActionTopSales";
import Product from '@/Components/Product'
import Loader from "@/pages/Loader";

export default function TopSalesWidget() {
  const { items, loading, error } = useSelector(
    (state) => state.ReducerTopSales
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTS)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {!error &&
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {items.map((el) => {
              return (
                <div className="col-4" key={el.id}>
                  <div className="card">
                    <Product product={el}/>
                  </div>
                </div>
              )}
            )}
          </div>
        </section>
      }
      {loading && <Loader />}
      {error && <h2 className="text-center">Ошибка. TopSalesWidget. Попробуйте еще раз.</h2>}
    </>
  )
}