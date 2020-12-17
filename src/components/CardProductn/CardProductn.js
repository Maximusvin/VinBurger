import s from './CardProductn.module.css';

const CardProduct = ({ product }) => {
  const { name, description, url, weight, price } = product;

  return (
    <div className={s.productCard}>
      <div className={s.descrProduct}>
        <div>
          <h2>{name}</h2>
          <p className={s.description}>
            {description} <span>{weight}</span>
          </p>
        </div>
        <div className={s.control}>
          <button type="button" className={s.button}>
            <span className={s.finalCost}>{price}</span>
            <span className={s.add}>Добавить к заказу</span>
          </button>
        </div>
      </div>

      <img src={url} alt="" className={s.img} />
    </div>
  );
};

export default CardProduct;
