import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { onChangeCatalogSearch } from "../../Reducers/ReducerCatalogSearch";

export default function SearchButton() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onclick = () => {
    const searchFormEl = document.querySelector('[data-id=search-form]');
    const input = searchFormEl.querySelector('.form-control')
    if(!searchFormEl.classList.contains('invisible') && input.value !== ''){
      dispatch(onChangeCatalogSearch(input.value))
      navigate('/catalog')
    }
    searchFormEl.classList.toggle('invisible');
    input.focus();
  }

  return (
    <div data-id="search-expander" onClick={onclick} className="header-controls-pic header-controls-search"></div>
  )
}