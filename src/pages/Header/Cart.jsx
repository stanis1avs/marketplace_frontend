import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Cart() {
  const navigate = useNavigate()
  const { items } = useSelector(state => state.ReducerCart);

  const handlerClick = () => {
    navigate('/cart')
  }

  return (
    <div className="header-controls-pic header-controls-cart" onClick={handlerClick}>
      {items.length > 0 && <div className="header-controls-cart-full">{items.length}</div>}
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}