import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCI } from "../Actions/ActionCategoryItems";
import Category from './Category'

export default function CatalogItems() {
  const { items, error} = useSelector(
    (state) => state.ReducerCategoryItems
  );
  const { categoryId } = useSelector(
    (state) => state.ReducerCatalog
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCI)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handlerClick = () => {
    dispatch()
  }

  return (
    <>
      {!error &&
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item">
            <NavLink className={( isActive ) => categoryId ? 'nav-link ' : 'nav-link active'} to="#" onClick={handlerClick}>Все</NavLink>
          </li>
          {items.map((el) => {
            return (
              <Category category={el} key={el.id}/>
            )}
          )}
        </ul>
      }
    </>
  )
}