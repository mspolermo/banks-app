import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { errorBank, fetchBankById, getBank, loadingBank } from '@/features/fetchBankById';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './BankById.module.scss';

interface BankByIdProps {
    className? : string;
}

export const BankById = memo((props: BankByIdProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const bank = useSelector(getBank);
    const error = useSelector(errorBank);
    const isLoading = useSelector(loadingBank);

    useEffect(() => {
        if (id) { 
            dispatch(fetchBankById(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (error) {
        setTimeout(() => {
            navigate(RoutePath.banks);
        }, 1000);
        return (
            <ErrorComponent />
        );
    }

    return (
        <div className={classNames(cls.BankById, {}, [className])}>
            <div className={cls.top}>
                <div className={cls.ava}>
                    {bank?.id}
                </div>
                <div>
                    <h2 className={cls.heading}>ПАО "{bank?.name}" </h2>
                    <p className={cls.description}>
                        <span className={cls.bold}>Описание: </span>
                        <span className={cls.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium et, inventore aperiam mollitia fugiat eos. Doloremque iusto excepturi quidem! Inventore, id unde. Dolorem, sed molestiae quasi magni omnis ipsam? Consequatur?
                        Perferendis eos amet odio error reiciendis voluptatem doloremque perspiciatis. Harum perferendis dolor aliquam sint! Inventore, molestias a, architecto, obcaecati temporibus rem cupiditate quae nihil ipsam officia rerum similique voluptatibus modi!</span>
                    </p>

                </div>
            </div>
            <div className={cls.body}>
                <h3 className={cls.smallHeading}>Режим работы:</h3>
                <div className={cls.work}>
                        <div className={cls.work__block}>
                            <h4 className={cls.microHeading}>Обслуживание физических лиц:</h4>
                            <p className={cls.work__textBlock}>
                                <span className={cls.text}>пн.-пт.: </span>
                                <span className={cls.nums}>08:30—20:00</span>
                            </p>
                            <p className={cls.work__textBlock}>
                                <span className={cls.text}>сб.: </span>
                                <span className={cls.nums}>09:00—17:00</span>
                            </p>
                        </div>
                        <div className={cls.work__block}>
                            <h4 className={cls.microHeading}>Обслуживание юридических лиц:</h4>
                            <p className={cls.work__textBlock}>
                                <span className={cls.text}>пн.-чт.: </span>
                                <span className={cls.nums}>09:00—17:00</span>
                            </p>
                            <p className={cls.work__textBlock}>
                                <span className={cls.text}>пт.: </span>
                                <span className={cls.nums}>09:00—16:00</span>
                            </p>
                        </div>
                </div>
                <p className={cls.textBlock}>
                    <span className={cls.bold}>Адрес: </span>
                    <span className={cls.text}>г. Екатеринбург, ул. {bank?.address}</span>
                </p>
                <p className={cls.textBlock}>
                    <span className={cls.bold}>Телефон: </span>
                    <span className={cls.text}>(343) 377-66-55</span>
                </p>
            </div>
        </div>
    );
});
