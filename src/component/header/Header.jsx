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
                <img className={s.img__zvezda} width='24px' height='23px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBrVXhdYJADA6+/i8j0A3coHaDbqCdgHYC7QS6AWxgOwF2AtwANkAnSJOSKyFwB8/n917eeZfvklxMAkAAiLgi2ZOUJA124H1G8gq3QAwXOA8VydpnKxoxfqAlNcdnEYeEZGU4OclHFEUXCESeq8g4JVuS2MNNRF+Z1MU+4wfz7ARmQByV6m4xRtrMMR54TWycvFtCpZQJ+KMtQ86xq7TmPxhsK8ZhHzC+E04W4KTKVuoOs6noJc/VDJ5+RaGfzSgNMRXntskc+PyIptJUwA3vH6CtaUbtSFzLRLjSzw34sRQ5m9qvZeUg4wX/kINeg9ClnJY3CGNHvM+A/nFhDY84OXjUXxPGGVd2UMtmCfeBs3Ph1LGDk1PgeCNpxyfPucZK1r/ZxQ6+lTL1XOI0PVFEL7zKfpBaCnAD3X+aa0WhOjAxl7zDzu5Vr1SWrLu5wpmDTgeB/Vm0HiPtb3GCw2l6DJFz060ZhsfCDoef0ngqoi36x0KG3fjAkWBimAMiLrE/3EJgnvfjH004eqaFL3PNJyI1tCV6grabf0I2fgG94NY2sz1ZfAAAAABJRU5ErkJggg==" alt="zvezda" />
            </div>
        </>
    );
};

export default Header;