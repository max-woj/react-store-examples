import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
    divide: (state, action) => {
      let divider = 2;
      if(action.payload && action.payload !== 0 ){
        divider = action.payload
      }
      state.value = state.value / divider;
    }
  },
});

export const { increment, decrement, divide } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
