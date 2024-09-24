import CategoryItems from '@/Components/CategoryItems'
import CatalogPage from './CatalogPage'
import LoadMore from './LoadMore'

export default function CatalogWidget({ items }) {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CategoryItems items={items}/>
      <CatalogPage />
      <LoadMore />
    </section>
  )
}