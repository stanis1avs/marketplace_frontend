import Header from './Header'
import Contacts from './Contacts'
import Footer from './Footer'
import Body from './Body'

export default function ContactsPage() {
  return (
    <>
      <Header/>
      <Body>
        <Contacts/>
      </Body>
      <Footer/>
    </>
  )
}