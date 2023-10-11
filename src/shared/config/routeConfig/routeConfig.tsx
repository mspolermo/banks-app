import { BankPage } from '@/pages/BankPage';
import { BanksListPage } from '@/pages/BanksListPage';
import { ConvertPage } from '@/pages/ConvertPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
    CONVERTER = 'converter',
    BANKS = 'banks',
    BANK = "bank",
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CONVERTER]: '/',
    [AppRoutes.BANKS]: '/banks',
    [AppRoutes.BANK]: '/banks/', //+id
    [AppRoutes.NOT_FOUND]: '*'
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.CONVERTER]: {
        path: RoutePath.converter,
        element: <ConvertPage />,
    },
    [AppRoutes.BANKS]: {
        path: RoutePath.banks,
        element: <BanksListPage />,
    },
    [AppRoutes.BANK]: {
        path: `${RoutePath.bank}:id`,
        element: <BankPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

