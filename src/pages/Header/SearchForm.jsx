export default function SearchForm({ formRef, inputRef }) {
  return (
    <form data-id="search-form" ref={formRef} className="header-controls-search-form form-inline invisible">
      <input className="form-control" placeholder="Поиск" ref={inputRef}/>
    </form>
  )
}