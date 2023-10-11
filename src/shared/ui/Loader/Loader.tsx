import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className? : string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('Loader', {}, [className])}>
        <div className='lds-ellipsis'>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
