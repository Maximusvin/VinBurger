import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import Modal from './UI/Modal/Modal';
import CardProduct from './components/CardProduct/CardProduct';
import Order from './components/Order/Order';
import useOpenItem from './Hooks/useOpenItem';
import useOrders from './Hooks/useOrders';
import useCount from './Hooks/useCount';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import dbMenu from './DATA/DBMenu';

function App() {
  const { openItem, setOpenItem } = useOpenItem();
  const [showCar, setShowCar] = useState(false);
  const orders = useOrders();
  const counter = useCount();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order showCar={showCar} setShowCar={setShowCar} {...orders} />
      <Menu setOpenItem={setOpenItem} menu={dbMenu} />

      {openItem && (
        <Modal onCloseModal={setOpenItem}>
          <CardProduct
            product={openItem}
            counter={counter}
            {...orders}
            onCloseModal={setOpenItem}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
