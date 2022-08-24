import React from 'react';
import s from './App.module.css'
import Content from './component/content/Content';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Modal from './component/modal/Modal';
import Navbar from './component/navbar/Navbar';


function App() {
  const [active, setActive] = React.useState(false)
    const activeMenu = () => setActive(true)
    const closeMenu = () => setActive(false)
  return (
    <>
    { active ? <Modal closeMenu={closeMenu} /> : (
      <>
      <div className={s.conteiner}>
      <Navbar activeMenu={activeMenu} />
      <Header />
      <Content />
      <Footer />
    </div>
    
    </>
    ) }
    </>
  );
}

export default App;
