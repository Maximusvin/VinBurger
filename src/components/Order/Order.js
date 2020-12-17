// import { useState, useEffect } from 'react';
import OrderListItem from './OrderListItem/OrderListItem';
import basket from '../../images/basket.svg';
import s from './Order.module.css';

const Order = ({ showOrder, setShowOrder }) => {
  const handlerOrder = () => {
    setShowOrder(showOrder => !showOrder);
  };

  return (
    <div className={showOrder ? s.openOrder : s.closeOrder}>
      <div className={s.basketImgWrap}>
        <ul className={s.orderContent}>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </ul>

        <div>
          <img src={basket} alt="Корзина" className={s.basketImg} />
          <p>Добавь сюда все, что захочется</p>
        </div>

        <div>
          <div className={s.totalCost}>
            <p>Всего:</p>
            <span>350 грн.</span>
          </div>
          <button type="button" className={s.checkoutOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
      <div className={s.visibleBasket} onClick={handlerOrder}>
        <h3>{!showOrder ? 'Корзина' : 'Закрыть'}</h3>
      </div>
    </div>
  );
};

export default Order;
