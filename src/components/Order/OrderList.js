import OrderListItem from './OrderListItem/OrderListItem';
import s from './Order.module.css';

const OrderList = ({ orders, counter }) => {
  const productLists = [];
  productLists.push(orders.map(item => item.name));
  console.log(productLists);

  return (
    <ul className={s.orderContent}>
      {orders.map(order => {
        return (
          <OrderListItem key={order.name} order={order} counter={counter} />
        );
      })}
    </ul>
  );
};

export default OrderList;
