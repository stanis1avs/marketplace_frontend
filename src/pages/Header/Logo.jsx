import headerLogo from "../../../public/img/headerLogo.png"
import Image from 'next/image';

export default function Logo() {
  return (
    <a className="navbar-brand" href="/">
      <Image src={headerLogo} alt="Bosa Noga" />
    </a>
  )
}