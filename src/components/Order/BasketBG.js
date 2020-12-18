// import { useState, useEffect } from 'react';
import basket from '../../images/basket.svg';
import s from './Order.module.css';

const BasketBG = () => (
  <div>
    <img src={basket} alt="Корзина" className={s.basketImg} />
    <p>Добавь сюда все, что захочется</p>
  </div>
);

export default BasketBG;
