export default function Product({product}) {
  return (
    <>
      {product.images && <img src={product.images[0]} className="card-img-top img-fluid" alt={product.title}/>}
      <div className="card-body">
        <p className="card-text">{product.title}</p>
        <p className="card-text">{`${product.price} руб.`}</p>
        <a href={`/catalog/${product.id}`} className="btn btn-outline-primary">Заказать</a>
      </div>
    </>
  )
}