import React from 'react';
import s from './Content.module.css'

const items = [{
    "id": 0,
    "imageUrl": "/assets/img/cover.png",
    "title": "Термокружка",
    "price": 700,
}, {
    "id": 1,
    "imageUrl": "/assets/img/cover.png",
    "title": "Термокружка",
    "price": 700,
}, {
    "id": 2,
    "imageUrl": "/assets/img/cover.png",
    "title": "Фен-щётка",
    "price": 600,
}, {
    "id": 3,
    "imageUrl": "/assets/img/cover.png",
    "title": "Внешний аккумулятор",
    "price": 600,
},{
    "id": 4,
    "imageUrl": "/assets/img/cover.png",
    "title": "Внешний аккумулятор",
    "price": 600,
},{
    "id": 5,
    "imageUrl": "/assets/img/cover.png",
    "title": "Внешний аккумулятор",
    "price": 600,
},
]

const Content = () => {
    return (
        <div className={s.content__wrapper}>
            <div className={s.content}>
                {
                    items.map((item) =>
                        <div className={s.item}>
                            <img className={s.img__item} src={item.imageUrl} alt="item" />
                            <p className={s.title__item}>{item.title}</p>
                            <div className={s.price}>
                                <div className={s.conteiner__price}>
                                    <h4 className={s.price__title}>
                                        {item.price}
                                    </h4>
                                    <img className={s.img__zvezda} width='24px' height='23px' src="/assets/img/orange.png" alt="zvezda_orange" />
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Content;