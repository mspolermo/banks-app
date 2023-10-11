import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BankSkeletonCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface BankSkeletonCardProps {
    className? : string;
}

export const BankSkeletonCard = memo((props: BankSkeletonCardProps) => {
    const { className } = props;
    return (
        <Card className={classNames(cls.BankSkeletonCard, {}, [className])}>
            <div className={cls.first}>
                <Skeleton className={cls.ava} />
                <Skeleton className={cls.title} height={40}/>              
            </div>
            <div className={cls.second}>
                <Skeleton className={cls.text} />
                <Skeleton className={cls.text} />
                <Skeleton className={cls.text} />
            </div>
        </Card>
    );
});
