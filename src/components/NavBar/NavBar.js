import { AiOutlineUserAdd, AiOutlineClockCircle } from 'react-icons/ai';
import Layout from '../Layout/Layout';
import logoImg from '../../images/burger.svg';
import Buttom from '../../UI/IconButton/IconButton';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logoWrap}>
          <img className={s.logoImg} src={logoImg} alt="Logo VinBurger" />
          <h1 className={s.title}>VinBurger</h1>
        </div>
        <div className={s.graph}>
          <AiOutlineClockCircle
            style={{ fontSize: '20px', marginRight: '5px' }}
          />
          График работы
        </div>
        <a href="tel:0979769625" className={s.delivery}>
          <span>Доставка:</span>
          +3 8 (097) 97-696-25
        </a>

        <Buttom className={s.authBtn}>
          <AiOutlineUserAdd style={{ fontSize: '20px' }} />
        </Buttom>
      </nav>
      <Layout>
        <div className={s.offer}>
          <p className={s.offerTitle}>
            Твой <span>Бургер</span> всегда рядом
          </p>
          <p className={s.description}>
            У каждого есть идеальная пара. Иногда приходится путешествовать по
            миру в её поисках. И где бы ни был ваш идеальный бургер, он всегда
            будет рядом.
          </p>
          <a href="#menu" className={s.offerButton}>
            Меню
          </a>
        </div>
      </Layout>
    </header>
  );
};
export default NavBar;
