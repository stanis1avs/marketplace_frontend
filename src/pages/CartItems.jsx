import { useSelector, useDispatch } from "react-redux";
import { cartDelete } from "../Reducers/ReducerCart";

export default function CartItems() {
  const { items, total } = useSelector(state => state.ReducerCart);
  const dispatch = useDispatch()

  const handlerRemove = (id) => {
    dispatch(cartDelete(id))
  }
  return (
    <>
      {items && 
        <>
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => 
                  <tr key={item.id}>
                    <td scope="row">{index+1}</td>
                    <td><a href={`/catalog/${item.id}`}>{item.title}</a></td>
                    <td>{item.size}</td>
                    <td>{item.count}</td>
                    <td>{item.price}</td>
                    <td>{item.result}</td>
                    <td><button className="btn btn-outline-danger btn-sm" onClick={() => handlerRemove(index)}>Удалить</button></td>
                  </tr>
                )}
                <tr>
                  <td colSpan="5" className="text-right">Общая стоимость</td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </>}
    </>
  )
}