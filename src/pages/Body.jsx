import banner from '../../public/img/banner.jpg'
import Image from 'next/image';

export default function Body(props) {
  return (
    <main className="container">
      <div className="row">
          <div className="col">
            <div className="banner">
              <Image src={banner} className="img-fluid" alt="К весне готовы!"/>
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            {props.children}
          </div>
      </div>
    </main>
  )
}