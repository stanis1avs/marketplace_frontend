import { useRef } from 'react';
import CartIcon from "./Header/CartIcon"
import Logo from "./Header/Logo"
import Navigation from "./Header/Navigation"
import SearchButton from "./Header/SearchButton"
import SearchForm from "./Header/SearchForm"

export default function Header() {
  const searchFormRef = useRef(null);
  const inputRef = useRef(null);

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
	                <SearchButton searchFormRef={searchFormRef} inputRef={inputRef} />
	                <CartIcon/>
	              </div>
	               <SearchForm formRef={searchFormRef} inputRef={inputRef} />
	            </div>
	          </div>
					</nav>
				</div>
			</div>
		</header>
	)
}