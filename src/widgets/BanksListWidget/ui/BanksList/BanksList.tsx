import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { errorBanks, fetchBanks, getBanks, loadingBanks } from '@/features/fetchBanks';
import { BankSkeletonCard } from '@/entities/Bank';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { BanksItem } from '../BanksItem/BanksItem';
import cls from './BanksList.module.scss';

interface BanksListProps {
    className? : string;
}

export const BanksList = memo((props: BanksListProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const banks = useSelector(getBanks);
    const isLoading = useSelector(loadingBanks);
    const error = useSelector(errorBanks);

    useEffect(() => {
        dispatch(fetchBanks({sort: 'id', direction: 'asc'}));
    }, [dispatch]);

    if (isLoading) {
        const skeletonElements = Array(7).fill(null);

        return (
            <ul className={classNames(cls.BanksList, {}, [className])}>
                {skeletonElements.map((_, index) => (
                    <li className={cls.BanksList__item} key={index}>
                        <BankSkeletonCard />    
                    </li>
                ))}
            </ul>
        );
    }

    if (error) {
        return (
            <ErrorComponent />
        );
    }

    return (
        <ul className={classNames(cls.BanksList, {}, [className])}>
            {banks?.map((bank) => (
                <li className={cls.BanksList__item} key={bank.id}>
                    <BanksItem 
                        id={bank.id}
                        name={bank.name}
                        address={bank.address}
                        distanceFromUser={bank.distanceFromUser}
                    />
                </li>
            ))}
        </ul>
    );
});
