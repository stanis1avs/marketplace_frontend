import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCL } from "../Actions/ActionCategoryLoad";
import { selectCategory } from "../Reducers/ReducerCatalog";

export default function Сategory({category}) {
  const { categoryId } = useSelector(
    (state) => state.ReducerCatalog
  );
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(selectCategory(category.id))
    dispatch(fetchCL(category.id))
  }

  return (
    <li className="nav-item">
      <NavLink className={( isActive ) => categoryId === category.id ? 'nav-link active' : 'nav-link'} to="#" onClick={handlerClick}>{category.title}</NavLink>
    </li>
  )
}