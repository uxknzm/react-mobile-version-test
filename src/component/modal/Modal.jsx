import React from 'react';
import s from './Modal.module.css'


const menuItem = [{

}, {
    title: 'Магазины',
    link: '#'
}, {
    title: 'Еда',
    link: '#'
}, {
    title: 'Услуги и сервисы',
    link: '#'
}, {
    title: 'Развлечения',
    link: '#'
},{
    title: 'Новости',
    link: '#'
},
]


const Modal = ({ closeMenu }) => {
    return (
        <div className={s.conteiner__menu}>
            <div className={s.navbar}>
                <img width='80px' height='55px' src='/assets/img/Слой 1.png' alt="iconBlack" />
                <img onClick={closeMenu} width='18px' height='18px' src='/assets/img/Close.png' alt="close" />
            </div>
            <div className={s.content__menu}>
                {
                    menuItem.map((menu) =>
                        <a href={menu.link}>
                            <h4>{menu.title}</h4>
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default Modal;