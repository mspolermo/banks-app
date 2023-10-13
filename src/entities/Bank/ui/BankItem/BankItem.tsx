import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '@/shared/ui/Card/Card';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BankItem.module.scss';
import { Bank, BankCardView } from '../../types/bank';


interface BankItemProps extends Bank {
    view? : BankCardView;
    className? : string;
}

export const BankItem = memo((props: BankItemProps) => {
    const {
        className, id, name, address, distanceFromUser, view = BankCardView.BIG
    } = props;
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${RoutePath.bank}${id}`)
    }

    if (view === BankCardView.SMALL) {
        return (
            <Card className={classNames(cls.SMALL, {}, [className])} onClick={clickHandler}>
                <div className={cls.SMALL__first}>
                    <p className={cls.SMALL__ava}>{id}</p>
                    <h3 className={cls.SMALL__title}>{name}</h3>                
                </div>
                <div className={cls.SMALL__second}>
                    <p className={cls.SMALL__text}> Адрес банковского отделения:</p>
                    <p className={cls.SMALL__text}>г. Екатеринбург, ул. {address}</p>
                    <p className={cls.SMALL__text}>Расстояние от пользователя: {distanceFromUser} км</p>
                </div>
            </Card>
        )
    }

    if (view === BankCardView.TILED) {
        return (
            <Card className={classNames(cls.TILED, {}, [className])} onClick={clickHandler}>
                <p className={cls.TILED__text}>Расстояние: {distanceFromUser} км</p>
                <p className={cls.TILED__ava}>{id}</p>
                <h3 className={cls.TILED__title}>{name}</h3>
                <p className={cls.TILED__text}>г. Екатеринбург, ул. {address}</p>
            </Card>
        )
    }

    return (
        <div className={classNames(cls.BIG, {}, [className])}>
            <div className={cls.BIG__ava}>
                {id}
            </div>
            <div>
                <h2 className={cls.BIG__heading}>ПАО «{name}» </h2>
                <p className={cls.BIG__textBlock}>
                    <span className={cls.BIG__bold}>Адрес: </span>
                    <span className={cls.BIG__text}>г. Екатеринбург, ул. {address}</span>
                </p>
                <p className={cls.BIG__textBlock}>
                    <span className={cls.BIG__bold}>Телефон: </span>
                    <span className={cls.BIT__text}>(343) 377-66-55</span>
                </p>
            </div>
        </div>
    );
});
