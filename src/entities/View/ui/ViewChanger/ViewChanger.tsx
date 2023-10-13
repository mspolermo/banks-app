import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewChanger.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ViewTypes } from '../../model/types/view';
import { getView, viewActions } from '../..';
import Icons from '@/shared/ui/Icons/Icons';

interface ViewChangerProps {
    className? : string;
}

export const ViewChanger = memo((props: ViewChangerProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getView);

    const IconChanger = (type: ViewTypes) => {
        if (type === ViewTypes.TILED) {
            dispatch( viewActions.setViewType(ViewTypes.LIST));
        } else if (type === ViewTypes.LIST) {
            dispatch( viewActions.setViewType(ViewTypes.TILED));
        }
    }

    return (
        <div className={classNames(cls.ViewChanger, {}, [className])}>
                <div
                    className={cls.btn}
                    onClick={() => IconChanger(ViewTypes.TILED)}
                >
                    <Icons
                        name='list'
                        size='24' 
                        className={ view === ViewTypes.LIST
                            ? cls.iconActive
                            : cls.icon
                        } 
                    />
                </div>
                <div
                    className={cls.btn}
                    onClick={() => IconChanger(ViewTypes.LIST)}
                >
                    <Icons
                        name='tiled'
                        size='24'
                        className={ view === ViewTypes.TILED
                            ? cls.iconActive
                            : cls.icon
                        }
                    />
                </div>
        </div>
    );
});
