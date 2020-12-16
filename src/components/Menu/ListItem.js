import s from './Menu.module.css';

const ListItem = ({ itemList }) => (
  <ul className={s.list}>
    {itemList.map(({ id, name, url, price }) => (
      <li key={id} className={s.item}>
        <img src={url} alt="" className={s.itemImg} />
        <div className={s.controlName}>
          <p>{name}</p>
          <p>
            {price.toLocaleString('ru-RU', {
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
