import Header from './Header'
import CartItems from './CartItems'
import CartOrder from './CartOrder'
import Footer from './Footer'
import Body from './Body'

export default function CartPage() {
  return (
    <>
      <Header/>
      <Body>
        <CartItems />
        <CartOrder />
      </Body>
      <Footer/>
    </>
  )
}