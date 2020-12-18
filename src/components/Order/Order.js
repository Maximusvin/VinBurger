import { useState, useEffect } from 'react';
import OrderList from './OrderList';
import BasketBG from './BasketBG';

import s from './Order.module.css';

const Order = ({ showCar, setShowCar, orders }) => {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setTotalPrice(orders.reduce((acc, order) => acc + order.price, 0));
  }, [orders]);

  const handlerOrder = () => {
    setShowCar(showCar => !showCar);
  };

  return (
    <div className={showCar ? s.openOrder : s.closeOrder}>
      <div className={s.basketImgWrap}>
        {orders.length ? <OrderList orders={orders} /> : <BasketBG />}
        <div>
          <div className={s.totalCost}>
            <p>Всего:</p>
            <span>{totalPrice} грн.</span>
          </div>
          <button type="button" className={s.checkoutOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
      <div className={s.visibleBasket} onClick={handlerOrder}>
        <h3>{!showCar ? 'Корзина' : 'Закрыть'}</h3>
      </div>
    </div>
  );
};

export default Order;
