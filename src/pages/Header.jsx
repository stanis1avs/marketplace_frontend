import Cart from "./Header/Cart"
import Logo from "./Header/Logo"
import Navigation from "./Header/Navigation"
import SearchButton from "./Header/SearchButton"
import SearchForm from "./Header/SearchForm"

export default function Header() {
	return (
		<header className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<Logo />
			      <div className="collapase navbar-collapse" id="navbarMain">
			      	<Navigation/>
	          	<div>
	          		<div className="header-controls-pics">
	                <SearchButton />
	                <Cart/>
	              </div>
	               <SearchForm />
	            </div>
	          </div>					
					</nav>
				</div>
			</div>
		</header>	
	)
}