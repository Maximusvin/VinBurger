import CounterProducts from './CounterProducts';
import { totalPriceItems } from '../../CardProduct/CardProduct';
import s from './OrderListItem.module.css';
import { IoMdClose } from 'react-icons/io';

const OrderListItem = ({ order, counter }) => {
  const { name, url, price, weight, count } = order;
  return (
    <li className={s.cartItem}>
      <div className={s.colImg}>
        <img src={url} alt="cart img" className={s.itemImg} />
        <CounterProducts {...counter} />
      </div>

      <div className={s.colContent}>
        <div className={s.topLine}>
          <h5>{name}</h5>
          <span>{totalPriceItems(price, count).toFixed(2)} ₴</span>
        </div>
        <div className={s.bottomLine}>
          <small>Котлета из говядины, {weight}</small>
          <span>
            <IoMdClose className={s.iconClose} />
          </span>
        </div>
      </div>
    </li>
  );
};

export default OrderListItem;
