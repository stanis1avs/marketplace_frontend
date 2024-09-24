import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { cartReset } from "../Reducers/ReducerCart";
import { postItem } from "../Actions/ActionCart";
import Loader from '@/pages/Loader'

export default function CartOrder() {
  const { items, status, loading } = useSelector(state => state.ReducerCart);

  const START_STATE = { phone: "", address: "", agreement: false };
  const [form, setForm] = useState(START_STATE);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postItem({ phone: form.phone, address: form.address, items })).then(()=>{
      setForm(START_STATE);
      setTimeout(() => dispatch(cartReset()), 3 * 1000)
    })
  }

  return (
    <>
    {items.length > 0 &&
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон" name="phone" value={form.phone} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки" name="address" value={form.address} onChange={handleChange}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement" name="agreement" checked={form.agreement} onChange={handleChange}/>
              <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary" disabled={!form.agreement}>Оформить</button>
          </form>
        </div>
      </section>}
      {status && <section className="order">
        <div className="cart-warning">{status}</div>
      </section>}
      {loading && <Loader />}
    </>
)}