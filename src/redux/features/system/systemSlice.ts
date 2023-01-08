import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  data: {},
};

export const systemSlice = createSlice({
  name: 'system',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // sync here
    clearResults: () => {},
  },
  extraReducers: () => {
    // async here
  },
});

// Other code such as selectors can use the imported `RootState` type
export const { clearResults } = systemSlice.actions;

export default systemSlice.reducer;
