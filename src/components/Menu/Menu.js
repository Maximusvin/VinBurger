import dbMenu from '../../DATA/DBMenu';
import ListItem from './ListItem';
import Layout from '../Layout/Layout';
import s from './Menu.module.css';

const Menu = () => (
  <main className={s.main} id="menu">
    <section className={s.section}>
      <h2>Бургеры</h2>
      <Layout>
        <ListItem itemList={dbMenu.burger} />
      </Layout>
    </section>
    <section className={s.section}>
      <h2>Закуски и напитки</h2>
      <Layout>
        <ListItem itemList={dbMenu.other} />
      </Layout>
    </section>
  </main>
);

export default Menu;
