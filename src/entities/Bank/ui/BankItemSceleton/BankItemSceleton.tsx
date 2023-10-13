import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BankItemSceleton.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { BankCardView } from '../..';

interface BankItemSceletonProps {
    view : BankCardView;
    className? : string;
}

export const BankItemSceleton = memo((props: BankItemSceletonProps) => {
    const { className, view } = props;
    if (view === BankCardView.SMALL) {
        return (
            <Card className={classNames(cls.SMALL, {}, [className])}>
                <div className={cls.SMALL__first}>
                    <Skeleton className={cls.SMALL__ava} />
                    <Skeleton className={cls.SMALL__title} height={40}/>              
                </div>
                <div className={cls.SMALL__second}>
                    <Skeleton className={cls.SMALL__text} />
                    <Skeleton className={cls.SMALL__text} />
                    <Skeleton className={cls.SMALL__text} />
                </div>
            </Card>
        )
    }

    if (view === BankCardView.TILED) {
        return (
            <Card className={classNames(cls.TILE, {}, [className])}>
                <Skeleton className={cls.TILE__text} />
                <Skeleton className={cls.TILE__ava} />
                <Skeleton className={cls.TILE__title} height={40}/>   
                <Skeleton className={cls.TILE__text} />
            </Card>
        )
    }

});
