import { memo, useEffect, useState } from 'react';
import { DirectionType, SoringTypes, fetchBanks } from '@/features/fetchBanks';
import { ViewChanger } from '@/entities/View';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BanksList } from '../BanksList/BanksList';
import cls from './BanksListWidget.module.scss';

const selectOptionsList: SelectOptions<string>[] = [
    { value: 'id', content: 'ID' },
    { value: 'name', content: 'Имени' },
    { value: 'address', content: 'Названию улицы' },
    { value: 'distanceFromUser', content: 'Расстоянию от пользователя' }
];

const selectDirectionOptionsList: SelectOptions<DirectionType>[] = [
    { value: 'asc', content: 'По возрастанию' },
    { value: 'desc', content: 'По убыванию' },
];

interface BanksListWidgetProps {
    className? : string;
}

export const BanksListWidget = memo((props: BanksListWidgetProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const [sortType, setSortType] = useState<SoringTypes>('id');
    const [sortDirection, setSortDirection] = useState<DirectionType>('asc');

    const changeHandlerOptions = (value: string) => {
        setSortType(value as SoringTypes);
        setSortDirection('asc');
    };

    const changeHandlerDirections = (value: DirectionType) => {
        setSortDirection(value)
    };

    useEffect(() => {
        dispatch(fetchBanks({ sort: sortType, direction: sortDirection }));
    }, [dispatch, sortType, sortDirection]);

    return (
        <div className={classNames(cls.BanksListWidget, {}, [className])}>
            <h2 className={cls.title}>
                Список основных банковских отделений:
            </h2>
            <div className={cls.selectsBlock}>
                <Select
                    value={sortType}
                    onChange={changeHandlerOptions}
                    label='Сортировать по:'
                    options={selectOptionsList}
                    className={cls.select}
                />
                <Select
                    value={sortDirection}
                    onChange={changeHandlerDirections}
                    label=''
                    options={selectDirectionOptionsList}
                    className={cls.select}
                />
            </div>
            <ViewChanger />
            <BanksList />
        </div>
    );
});
