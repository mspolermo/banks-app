import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BanksSchema } from '../types/banksSchema';
import { fetchBanks } from '../services/fetchBanks';
import { Bank } from '@/entities/Bank';

const initialState: BanksSchema = {
    isLoading: false,
    error: undefined,
    data: [],
};

export const banksSlice = createSlice({
    name: 'banks',
    initialState,
    reducers: {
        setBanks: (state, action: PayloadAction<Bank[]>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanks.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchBanks.fulfilled, (state, action) => {
                state.isLoading = false;
                if (Array.isArray(action.payload)) {
                    state.data = action.payload;
                }
            })
            .addCase(fetchBanks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
});

export const { actions: banksActions } = banksSlice;
export const { reducer: banksReducer } = banksSlice;
