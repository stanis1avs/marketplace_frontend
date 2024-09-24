import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

// export default function Product({product}) {

//   return (
//     <>
//       {product.images && <Image src={product.images[0]} width={350} height={350} className="card-img-top img-fluid" alt={product.title}/>}
//       <div className="card-body">
//         <p className="card-text">{product.title}</p>
//         <p className="card-text">{`${product.price} руб.`}</p>
//         <Link href={`/catalog/${product.id}`} className="btn btn-outline-primary">Заказать </Link>
//       </div>
//     </>
//   )
// }

const Product = React.memo(function Product({ product }) {
  const productTitle = React.useMemo(() => product.title, [product.title]);
  const productImage = React.useMemo(() => product.images[0], [product.images]);

  return (
    <>
      {productImage && (
        <Image
          src={productImage}
          width={350}
          height={350}
          className="card-img-top img-fluid"
          alt={productTitle}
        />
      )}
      <div className="card-body">
        <p className="card-text">{productTitle}</p>
        <p className="card-text">{`${product.price} руб.`}</p>
        <Link href={`/catalog/${product.id}`} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.product.title === nextProps.product.title &&
    prevProps.product.images[0] === nextProps.product.images[0] &&
    prevProps.product.price === nextProps.product.price
  );
});

export default Product;
