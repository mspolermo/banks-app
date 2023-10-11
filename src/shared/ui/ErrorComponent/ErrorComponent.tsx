import { memo } from 'react';
import cls from './ErrorComponent.module.scss';
import { Card } from '@/shared/ui/Card/Card';

export const ErrorComponent = memo(() => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className={cls.ErrorComponent}>
            <Card
                className={cls.card}
                onClick={handleReload}
            >
                Произошла ошибка загрузки данных. Нажмите чтобы обновить страницу.
            </Card>
        </div>
    );
});
