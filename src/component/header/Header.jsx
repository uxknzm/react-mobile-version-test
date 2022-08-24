import React from 'react';
import s from './Header.module.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Points = [{
    id: 0,
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
                        <h2 key={points.id}>
                            Твои баллы: {points.point}
                        </h2>
                    )
                }
                <svg className={s.img__zvezda} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_360)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0127563 11.4818C0.0127563 5.13407 5.19371 0.0042038 11.565 0.0042038C17.9362 0.0042038 23.1172 5.13407 23.1172 11.4818C23.1172 17.8295 17.9362 22.9594 11.565 22.9594C5.19371 22.9594 0.0127563 17.8295 0.0127563 11.4818ZM11.565 2.57136C6.59384 2.57136 2.57991 6.56948 2.57991 11.4818C2.57991 16.3941 6.59384 20.3922 11.565 20.3922C16.5361 20.3922 20.55 16.3941 20.55 11.4818C20.55 6.56948 16.5361 2.57136 11.565 2.57136Z" fill="white" />
                        <path d="M11.5662 5.53951L13.4041 8.97475L17.263 9.64843L14.54 12.4452L15.087 16.2968L11.5662 14.5901L8.04536 16.2968L8.59242 12.4452L5.86932 9.64843L9.7283 8.97475L11.5662 5.53951Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7_360">
                            <rect width="23.1345" height="23" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </>
    );
};

export default Header;