import React from 'react';
import s from './Navbar.module.css'

const Header = ({activeMenu}) => {
    return (<div className={s.wrapper}>
        <div className={s.navbar}>
            <img width='80px' height='55px' src='data:image/png;base64,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' alt="icon" />
            <img onClick={activeMenu} width='29px' height='16px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAQCAYAAADqDXTRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAmSURBVHgB7dNBDQAACAOxDf+eAQt8SAhXD3U2LQsBV5kywMSfMgU5OAv+hzyrYAAAAABJRU5ErkJggg==' alt="vector" />
        </div>

    </div>
    );
};

export default Header;