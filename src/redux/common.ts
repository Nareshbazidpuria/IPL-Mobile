import {createSlice} from '@reduxjs/toolkit';
import {background} from '../utils/global';

const initialState = background;

const statusBarColorSlice = createSlice({
  name: 'statusBarColor',
  initialState,
  reducers: {
    setStatusBarColor: (state, action) => (state = action.payload),
  },
});

export const {setStatusBarColor} = statusBarColorSlice.actions;
export const statusBarColor = statusBarColorSlice.reducer;
