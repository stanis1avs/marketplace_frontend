import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link'
import { fetchCL } from "@/Actions/ActionCategoryLoad";
import Category from '@/Components/Category'

export default function CategoryItems({items}) {
  const dispatch = useDispatch();
  const categories = items?.length ? [{ id: 0, title: 'Все' }, ...items] : null;

  const handlerClick = (e) => {
    e.preventDefault()
    dispatch(fetchCL(0))
  }

  return (
    <>
      {
        <ul className="catalog-categories nav justify-content-center">
          {categories && categories.map((el) => {
            return (
              <Category category={el} key={el.id}/>
            )}
          )}
        </ul>
      }
    </>
  )
}

