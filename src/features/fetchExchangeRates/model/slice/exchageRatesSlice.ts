import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ExchangeRatesSchema } from '../types/exchangeRatesSchema';
import { ExchangeRate } from '@/entities/ExchangeRates';
import { fetchExchangeRates } from '../services/fetchExchangeRates';

const initialState: ExchangeRatesSchema = {
    isLoading: false,
    error: undefined,
    data: [],
};

export const exchangeRatesSlice = createSlice({
    name: 'exchangeRates',
    initialState,
    reducers: {
        setExchangeRates: (state, action: PayloadAction<ExchangeRate[]>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExchangeRates.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchExchangeRates.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchExchangeRates.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
});

export const { actions: exchangeRatesActions } = exchangeRatesSlice;
export const { reducer: exchangeRatesReducer } = exchangeRatesSlice;
