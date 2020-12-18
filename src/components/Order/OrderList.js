import OrderListItem from './OrderListItem/OrderListItem';
import s from './Order.module.css';

const OrderList = ({ orders }) => {
  return (
    <ul className={s.orderContent}>
      {orders.map(order => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </ul>
  );
};

export default OrderList;
