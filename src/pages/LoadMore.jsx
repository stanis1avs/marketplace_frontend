import { useSelector, useDispatch } from "react-redux";
import { fetchLM } from "../Actions/ActionLoadMore";
import { updateOffset } from "../Reducers/ReducerCatalog";

export default function LoadMore() {
  const { items, categoryId, offset } = useSelector(
    (state) => state.ReducerCatalog
  );
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(updateOffset(6))
    dispatch(fetchLM(offset, categoryId))
  }

  return (
    items.length === 6 &&
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={handlerClick}>Загрузить ещё</button>
      </div>
    )
}