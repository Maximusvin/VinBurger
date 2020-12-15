import dbMenu from '../../DATA/DBMenu';
import ListItem from './ListItem';
import s from './Menu.module.css';

const Menu = () => (
  <main className={s.main} id="menu">
    <section className={s.section}>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </section>
    <section className={s.section}>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </section>
  </main>
);

export default Menu;
