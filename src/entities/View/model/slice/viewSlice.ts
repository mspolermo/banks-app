import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ViewTypes, ViewSchema } from '../types/view';

const initialState: ViewSchema = {
    view: ViewTypes.LIST,
}

export const viewSlice = createSlice({
    name:'view',
    initialState,
    reducers: {
        setViewType: (state, action: PayloadAction<ViewTypes>) => {
            state.view = action.payload;
        }
    }
})

export const { actions: viewActions } = viewSlice;
export const { reducer: viewReducer } = viewSlice;
