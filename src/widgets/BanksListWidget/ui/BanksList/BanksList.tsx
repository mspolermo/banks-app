import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { errorBanks, fetchBanks, getBanks, loadingBanks } from '@/features/fetchBanks';
import { BankItem, BankItemSceleton, BankCardView } from '@/entities/Bank';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './BanksList.module.scss';
import { ViewTypes, getView } from '@/entities/View';

export const BanksList = memo(() => {
    const dispatch = useAppDispatch();
    const banks = useSelector(getBanks);
    const isLoading = useSelector(loadingBanks);
    const error = useSelector(errorBanks);

    const view = useSelector(getView);
    const [cardView, setCardView] = useState<BankCardView>(BankCardView.SMALL);

    useEffect(() => {
        dispatch(fetchBanks({sort: 'id', direction: 'asc'}));
    }, [dispatch]);

    useEffect(() => {
        if (view === ViewTypes.LIST) {
            setCardView(BankCardView.SMALL)
        } else if ( view === ViewTypes.TILED) {
            setCardView(BankCardView.TILED)
        }
    }, [view])


    if (isLoading) {
        const skeletonElements = Array(9).fill(null);

        return (
            <ul className={view === ViewTypes.LIST
                ? cls.BanksList
                : cls.BanksTilles
            }>
                {skeletonElements.map((_, index) => (
                    <li
                        key={index}
                        className={view === ViewTypes.LIST
                            ? cls.item
                            : cls.tile
                        }
                    >
                        <BankItemSceleton view={cardView} />    
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
        <ul className={view === ViewTypes.LIST
            ? cls.BanksList
            : cls.BanksTilles
        }>
            {banks?.map((bank) => (
                <li
                    key={bank.id}
                    className={view === ViewTypes.LIST
                        ? cls.item
                        : cls.tile
                    }
                >
                    <BankItem 
                        id={bank.id}
                        name={bank.name}
                        address={bank.address}
                        distanceFromUser={bank.distanceFromUser}
                        view={cardView}
                    />
                </li>
            ))}
        </ul>
    );
});
