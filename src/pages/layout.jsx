import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default function RootLayout({children}) {
  return (
    <>
      <Header/>
      <Body>
         {children}
      </Body>
      <Footer/>
    </>
  )
}