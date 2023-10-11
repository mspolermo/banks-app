import { Bank } from '@/entities/Bank';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
  
export const fetchBankById = createAsyncThunk<Bank, string, { rejectValue: string }>(
    'banks/fetchBankById',
    async (bankId, thunkAPI) => {
        try {
            const response = await axios.get<Bank>(`http://localhost:4000/banks/${bankId}`);
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
