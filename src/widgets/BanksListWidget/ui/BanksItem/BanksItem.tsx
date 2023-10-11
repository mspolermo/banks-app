import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bank } from '@/entities/Bank';
import { Card } from '@/shared/ui/Card/Card';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BanksItem.module.scss';

interface BanksItemProps extends Bank {
    className? : string;
}

export const BanksItem = memo((props: BanksItemProps) => {
    const {
        className, id, name, address, distanceFromUser 
    } = props;
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${RoutePath.bank}${id}`)
    }

    return (
        <Card className={classNames(cls.BanksItem, {}, [className])} onClick={clickHandler}>
            <div className={cls.first}>
                <p className={cls.ava}>{id}</p>
                <h3 className={cls.title}>{name}</h3>                
            </div>
            <div className={cls.second}>
                <p className={cls.text}> Адрес банковского отделения:</p>
                <p className={cls.text}>г. Екатеринбург, ул. {address}</p>
                <p className={cls.text}>Расстояние от пользователя: {distanceFromUser} км</p>
            </div>
        </Card>
    );
});
