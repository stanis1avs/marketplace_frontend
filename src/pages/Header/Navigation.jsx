import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className={ pathname == '/' ? 'nav-link active' : 'nav-link'} href="/">Главная</Link>
      </li>
      <li className="nav-item">
        <Link className={ pathname == '/catalog' ? 'nav-link active' : 'nav-link'} href="/catalog">Каталог</Link>
      </li>
      <li className="nav-item">
        <Link className={ pathname == '/about' ? 'nav-link active' : 'nav-link'} href="/about">О магазине</Link>
      </li>
      <li className="nav-item">
        <Link className={ pathname == '/contacts' ? 'nav-link active' : 'nav-link'} href="/contacts">Контакты</Link>
      </li>
    </ul>
  )
}