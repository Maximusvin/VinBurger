import ListItem from './ListItem';
import Layout from '../Layout/Layout';
import s from './Menu.module.css';

const Menu = ({ setOpenItem, menu }) => (
  <main className={s.main} id="menu">
    <section className={s.section}>
      <h2>Бургеры</h2>
      <Layout>
        <ListItem itemList={menu.burger} setOpenItem={setOpenItem} />
      </Layout>
    </section>
    <section className={s.section}>
      <h2>Закуски и напитки</h2>
      <Layout>
        <ListItem itemList={menu.other} setOpenItem={setOpenItem} />
      </Layout>
    </section>
  </main>
);

export default Menu;
