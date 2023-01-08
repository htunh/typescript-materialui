import { createSlice } from '@reduxjs/toolkit';
import { ResponseApiProps } from '../../../interfaces/common/serviceTypes';
import { RootState } from '../../store';
import { fetchAnime } from './animeApi';

// Define the initial state using that type
const initialState = {
  data: {},
};

export const animeSlice = createSlice({
  name: 'anime',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // sync here
  },
  extraReducers: (builder) => {
    // async here
    builder.addCase(fetchAnime.fulfilled, (state, action) => ({
      ...state,
      animeList: action.payload,
    }));
    builder.addCase(fetchAnime.rejected, (state, action) => ({
      ...state,
      message: action.payload,
    }));
  },
});

// Other code such as selectors can use the imported `RootState` type
export const animes = (state: RootState): ResponseApiProps =>
  state.anime.animeList;

export default animeSlice.reducer;
