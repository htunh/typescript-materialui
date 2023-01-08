import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchApiProps } from '../../../interfaces/common/serviceTypes';

export const fetchAnime = createAsyncThunk(
  'anime/fetch',
  async (apiData: FetchApiProps, { fulfillWithValue, rejectWithValue }) => {
    const { api, URL } = apiData;
    try {
      const response = await api.get(URL);
      return fulfillWithValue(response.data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
