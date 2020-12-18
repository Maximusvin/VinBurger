import s from './OrderListItem.module.css';
import { IoMdClose } from 'react-icons/io';

const OrderListItem = ({ order }) => {
  const { name, url, price, weight } = order;
  return (
    <li className={s.cartItem}>
      <div className={s.colImg}>
        <img src={url} alt="cart img" className={s.itemImg} />
        <span className={s.btnMinus}>-</span>
        <input type="number" className={s.counterNumber} />
        <span className={s.btnPlus}>+</span>
      </div>

      <div className={s.colContent}>
        <div className={s.topLine}>
          <h5>{name}</h5>
          <span>{price} ₴</span>
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
