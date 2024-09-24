import CatalogPage from '@/Components/CatalogPage'
import CategoryItems from '@/Components/CategoryItems'
import LoadMore from '@/Components/LoadMore'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "@/Actions/ActionSearch";
import { onChangeCatalogSearch } from "@/Reducers/ReducerCatalogSearch";


export async function getStaticProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_CATALOG);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const items = await response.json();

    return {
      props: { items },
    };
  } catch {
    return {
      props: { items: [] },
    };
  }
}


export default function Catalog({items}) {
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
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
          <input className="form-control" placeholder="Поиск" value={catalogSearch} onChange={handleChange}/>
        </form>
        <CategoryItems items={items}/>
        <CatalogPage />
        <LoadMore />
      </section>
    </>
  )
}