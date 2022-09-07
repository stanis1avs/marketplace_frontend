import CategoryItems from './CategoryItems'
import Catalog from './Catalog'
import LoadMore from './LoadMore'

export default function CatalogWidget() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CategoryItems />
      <Catalog />
      <LoadMore />
    </section>
  )
}