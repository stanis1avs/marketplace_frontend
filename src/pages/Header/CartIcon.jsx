import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";

export default function CartIcon() {
  const router = useRouter()
  const { items } = useSelector(state => state.ReducerCart);

  const handlerClick = () => {
    router.push('/cart')
  }

  return (
    <div className="header-controls-pic header-controls-cart" onClick={handlerClick}>
      {items.length > 0 && <div className="header-controls-cart-full">{items.length}</div>}
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}