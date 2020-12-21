import CounterProducts from '../Order/OrderListItem/CounterProducts';
import s from './CardProduct.module.css';

const CountItem = ({ counter }) => (
  <div className={s.countWrapper}>
    <span>Количество:</span>
    <div className={s.countControl}>
      <CounterProducts {...counter} />
    </div>
  </div>
);

export default CountItem;
