import s from './Menu.module.css';

const ListItem = ({ itemList, setOpenItem }) => (
  <ul className={s.list}>
    {itemList.map(product => (
      <li
        key={product.id}
        className={s.item}
        onClick={() => setOpenItem(product)}
      >
        <img src={product.url} alt="" className={s.itemImg} />
        <div className={s.controlName}>
          <p>{product.name}</p>
          <p>
            {product.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'UAH',
            })}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export default ListItem;
