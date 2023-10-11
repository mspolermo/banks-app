import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { banksReducer } from '@/features/fetchBanks';
import { bankReducer } from '@/features/fetchBankById';
import { exchangeRatesReducer } from '@/features/fetchExchangeRates';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            banks: banksReducer,
            bank: bankReducer,
            exchangeRates: exchangeRatesReducer,
        },
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
