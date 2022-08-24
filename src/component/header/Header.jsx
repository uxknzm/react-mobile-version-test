import React from 'react';
import s from './Header.module.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Points = [{
    point: 50
}]


const Header = () => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.content__header}>
                    <Breadcrumbs sx={{ color: '#BEBBB9', paddingTop: '30px' }} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            <p>Главная</p>
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                            <p>Личный кабинет</p>
                        </Link>
                    </Breadcrumbs>
                    <h1 className={s.title}>
                        Витрина <br></br>
                        подарков
                    </h1>
                </div>

            </div>
            <div className={s.orange}>
                {
                    Points.map((points) =>
                        <h2>
                            Твои баллы: {points.point}
                        </h2>
                    )
                }
                <img className={s.img__zvezda} width='24px' height='23px' src="/assets/img/gift-card icon.png" alt="zvezda" />
            </div>
        </>
    );
};

export default Header;