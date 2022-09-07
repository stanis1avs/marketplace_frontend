import Header from './Header'
import Catalog from './Catalog'
import Footer from './Footer'
import Body from './Body'
import CategoryItems from './CategoryItems'
import LoadMore from './LoadMore'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../Actions/ActionSearch";
import { onChangeCatalogSearch } from "../Reducers/ReducerCatalogSearch";

export default function CatalogPage() {
  const dispatch = useDispatch()
  const { catalogSearch } = useSelector(state => state.ReducerCatalogSearch);

  useEffect(() => {
    dispatch(fetchSearch(catalogSearch))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(catalogSearch))
  }

  const handleChange = (e) => {
    dispatch(onChangeCatalogSearch(e.target.value))
  }

  return (
    <>
      <Header/>
      <Body>
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
              <input className="form-control" placeholder="Поиск" value={catalogSearch} onChange={handleChange}/>
          </form>
          <CategoryItems />
          <Catalog />
          <LoadMore />
        </section>
      </Body>
      <Footer/>
    </>
  )
}