import { Bank } from '@/entities/Bank';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type SoringTypes = 'id' | 'name' | 'address' | 'distanceFromUser';
export type DirectionType = 'asc' | 'desc';

interface fetchBanksProps {
    sort: SoringTypes;
    direction: DirectionType;
}
  
export const fetchBanks = createAsyncThunk<Bank[], fetchBanksProps, { rejectValue: string }>(
    'banks/fetchBanks',
    async ({ sort, direction }, thunkAPI) => {
      try {
        const response = await axios.get<Bank[]>(`http://localhost:4000/banks/?sort=${sort}&direction=${direction}`);
        return response.data;
      } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
      }
    }
  );
