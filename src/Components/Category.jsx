import { useDispatch, useSelector } from "react-redux";
import { fetchCL } from "@/Actions/ActionCategoryLoad";
import { selectCategory } from "@/Reducers/ReducerCatalog";

export default function Сategory({category}) {
  const { categoryId } = useSelector(
    (state) => state.ReducerCatalog
  );
  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault()
    dispatch(selectCategory(category.id))
    dispatch(fetchCL(category.id))
  }

  return (
    <li className="nav-item">
      <a className={categoryId === category.id ? 'nav-link active' : 'nav-link'} href="#" onClick={handlerClick}>{category.title}</a>
    </li>
  )
}