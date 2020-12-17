import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import Modal from './UI/Modal/Modal';
import CardProduct from './components/CardProductn/CardProductn';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import dbMenu from './DATA/DBMenu';

function App() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} menu={dbMenu} />

      {openItem && (
        <Modal onCloseModal={setOpenItem}>
          <CardProduct product={openItem} />
        </Modal>
      )}
    </>
  );
}

export default App;
