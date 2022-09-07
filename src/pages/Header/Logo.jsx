import headerLogo from "../../img/headerLogo.png"
export default function Logo() {
  return (
    <a className="navbar-brand" href="/">
      <img src={headerLogo} alt="Bosa Noga"/>
    </a>
  )
}