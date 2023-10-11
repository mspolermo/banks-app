import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BankSchema} from '../types/bankSchema';
import { fetchBankById } from '../services/fetchBankById';
import { Bank } from '@/entities/Bank';

const initialState: BankSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        setBank: (state, action: PayloadAction<Bank>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBankById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchBankById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchBankById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
});

export const { actions: bankActions } = bankSlice;
export const { reducer: bankReducer } = bankSlice;
