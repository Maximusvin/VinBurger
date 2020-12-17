// import { useState } from 'react';
import basket from '../../images/basket.svg';
import s from './Order.module.css';

const Order = ({ showOrder, setShowOrder }) => {
  const handleOrder = () => {
    setShowOrder(showOrder => !showOrder);
  };

  return (
    <div
      className={showOrder ? s.openOrder : s.closeOrder}
      onClick={handleOrder}
    >
      <div className={s.basketImgWrap}>
        <div>
          <img src={basket} alt="Корзина" className={s.basketImg} />
          <p>Добавь сюда все, что захочется</p>
        </div>
        <button type="button" className={s.checkoutOrder}>
          Оформить заказ
        </button>
      </div>
      {!showOrder && (
        <div className={s.visibleBasket}>
          <h3>Корзина</h3>
        </div>
      )}
    </div>
  );
};

export default Order;
