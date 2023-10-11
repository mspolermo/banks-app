import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const location = useLocation();

    return (
        <header className={cls.Navbar}>
            <nav className={cls.btnsBlock}>
                <button className={cls.btn}>
                    <Link
                        to={RoutePath.converter}
                        className={location.pathname === RoutePath.converter ? cls.activeBtn : cls.passiveBtn}
                    >
                        Конвертер валют
                    </Link>
                </button>
                <button className={cls.btn}>
                    <Link
                        to={RoutePath.banks}
                        className={location.pathname === RoutePath.banks ? cls.activeBtn : cls.passiveBtn}
                    >
                        Список банков
                    </Link>
                </button>  
            </nav>
        </header>
    );
});
