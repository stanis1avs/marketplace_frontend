import { useRouter } from 'next/navigation'
import { useDispatch } from "react-redux";
import { onChangeCatalogSearch } from "../../Reducers/ReducerCatalogSearch";

export default function SearchButton({ searchFormRef, inputRef }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const onclick = () => {
    const searchFormEl = searchFormRef.current;
    const input = inputRef.current;

    if (!searchFormEl.classList.contains('invisible') && input.value !== '') {
      dispatch(onChangeCatalogSearch(input.value));
      router.push('/catalog');
    }
    searchFormEl.classList.toggle('invisible');
    input.focus();
  };

  return (
    <div data-id="search-expander" onClick={onclick} className="header-controls-pic header-controls-search"></div>
  )
}