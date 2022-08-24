import React from 'react';
import s from './Navbar.module.css'

const Header = ({activeMenu}) => {
    return (<div className={s.wrapper}>
        <div className={s.navbar}>
            <img width='80px' height='55px' src='/assets/img/icon.png' alt="icon" />
            <img onClick={activeMenu} width='29px' height='16px' src='/assets/img/Vector.png' alt="vector" />
        </div>

    </div>
    );
};

export default Header;