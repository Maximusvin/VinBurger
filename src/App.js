import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import Menu from './components/Menu/Menu';

function App() {
  const [openItem, setOpenItem] = useState('');
  console.log('Item', openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
