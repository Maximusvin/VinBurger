import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import Modal from './UI/Modal/Modal';
import CardProduct from './components/CardProductn/CardProductn';
import Order from './components/Order/Order';
import useOpenItem from './Hooks/useOpenItem';
import useOrders from './Hooks/useOrders';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import dbMenu from './DATA/DBMenu';

function App() {
  const { openItem, setOpenItem } = useOpenItem();
  const [showCar, setShowCar] = useState(false);
  const orders = useOrders();

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
            onCloseModal={setOpenItem}
            {...orders}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
