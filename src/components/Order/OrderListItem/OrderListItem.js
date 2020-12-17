import s from './OrderListItem.module.css';
import { IoMdClose } from 'react-icons/io';

const OrderListItem = () => {
  return (
    <li className={s.cartItem}>
      <div className={s.colImg}>
        <img
          src="https://res.cloudinary.com/maximusvin/image/upload/v1608112629/burgers/freckles-burger_zgv8eh.png"
          alt="Вейдер cart img"
          className={s.itemImg}
        />
        <span className={s.btnMinus}>-</span>
        <input type="number" className={s.counterNumber} />
        <span className={s.btnPlus}>+</span>
      </div>

      <div className={s.colContent}>
        <div className={s.topLine}>
          <h5>Sun Burger</h5>
          <span>134 ₴</span>
        </div>
        <div className={s.bottomLine}>
          <small>Котлета из говядины, 305г</small>
          <span>
            <IoMdClose className={s.iconClose} />
          </span>
        </div>
      </div>
    </li>
  );
};

export default OrderListItem;
