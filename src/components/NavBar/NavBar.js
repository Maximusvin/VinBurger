import { useState, useEffect } from 'react';
import { AiOutlineUserAdd, AiOutlineClockCircle } from 'react-icons/ai';
import Layout from '../Layout/Layout';
import logoImg from '../../images/burger.svg';
import Button from '../../UI/IconButton/IconButton';
import s from './NavBar.module.css';

const NavBar = () => {
  const [nav, setNav] = useState(s.nav);

  const listenScrollEvent = () => {
    if (window.scrollY < 100) {
      return setNav(s.nav);
    } else if (window.scrollY > 99) {
      return setNav(s.navBlack);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={s.header}>
      <nav className={nav}>
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
        <a href="tel:380979769625" className={s.delivery}>
          <span>Доставка:</span>
          +3 8 (097) 97-696-25
        </a>

        <Button className={s.authBtn}>
          <AiOutlineUserAdd style={{ fontSize: '20px' }} />
        </Button>
      </nav>
      <Layout>
        <div className={s.offer}>
          <p className={s.offerTitle}>
            Твой <span>Бургер</span> всегда рядом
          </p>
          <p className={s.description}>
            У каждого есть идеальная пара. Иногда приходится путешествовать по
            миру в её поисках. И где бы ни был ваш идеальный бургер, он всегда
            будет рядом вместе с VinBurger.
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
