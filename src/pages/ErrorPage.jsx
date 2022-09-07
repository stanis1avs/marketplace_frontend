import Header from './Header'
import Body from './Body'
import Error from './Error'
import Footer from './Footer'

export default function ErrorPage() {
	return (
		<>
      <Header/>
      <Body>
        <Error/>
      </Body>
      <Footer/>
    </>
		)
}