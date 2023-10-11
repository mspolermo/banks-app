import { ExchangeRate } from '@/entities/ExchangeRates';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExchangeRates = createAsyncThunk<ExchangeRate[], void, { rejectValue: string }>(
  'exchangeRates/fetchExchangeRates',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ExchangeRate[]>(`http://localhost:4000/exchange-rates`);
      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
