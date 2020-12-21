import CountItem from './CountItem';
import s from './CardProduct.module.css';

export const totalPriceItems = (price, count) => price * count;

const CardProduct = ({ product, onCloseModal, orders, setOrders, counter }) => {
  const { name, description, url, weight } = product;

  const order = {
    ...product,
    count: counter.count,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    onCloseModal(null);
  };

  return (
    <div className={s.productCard}>
      <div className={s.descrProduct}>
        <div>
          <h2>{name}</h2>
          <p className={s.description}>
            {description} <span>{weight}</span>
          </p>
          <div>
            <button
              type="buttton"
              disabled={counter.count <= 1}
              className={s.btnMinus}
              onClick={() => counter.setCount(counter.count - 1)}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="100"
              value={counter.count < 1 ? 1 : counter.count}
              className={s.counterNumber}
              onChange={counter.onChange}
            />
            <button
              type="buttton"
              className={s.btnPlus}
              onClick={() => counter.setCount(counter.count + 1)}
            >
              +
            </button>
          </div>
          {/* <CountItem counter={counter} /> */}
        </div>
        <div className={s.control}>
          <button type="button" className={s.button}>
            <span className={s.finalCost}>
              {totalPriceItems(order.price, order.count)} грн.
            </span>
            <span className={s.add} onClick={addToOrder}>
              Добавить к заказу
            </span>
          </button>
        </div>
      </div>

      <img src={url} alt="" className={s.img} />
    </div>
  );
};

export default CardProduct;
