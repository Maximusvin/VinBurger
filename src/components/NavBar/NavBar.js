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
    </header>
  );
};
export default NavBar;
