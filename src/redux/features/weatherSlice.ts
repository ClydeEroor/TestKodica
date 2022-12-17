import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CityWeatherData } from '../../utils/constants';

export type State = {
  weather: CityWeatherData[];
  error: string;
  loading: boolean;
};

const initialState: State = {
  weather: [],
  error: '',
  loading: false
};

export const getCityWeather = createAsyncThunk(
  '/getCityWeather',
  async (inputCityQuery: string) => {
    try {
      let queryString = '';
      if (inputCityQuery) {
        queryString = inputCityQuery;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${queryString}&appid=f473cb3c4a2865e315ac74ebbd07ab80`;
      const { data } = await axios.get(url);
      return data;
    } catch (error: any) {
      if (error?.response?.data) {
        throw error.response.data;
      } else {
        throw error;
      }
    }
  }
);

export const updateCityCard = createAsyncThunk('/updateCityCard', async (cityId: number) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${cityId}&appid=f473cb3c4a2865e315ac74ebbd07ab80`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const CityWeather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    deleteCity: (state, action: PayloadAction<{ id: number }>) => {
      state.weather = state.weather.filter((elem) => elem.id !== action.payload.id);
    }
  },
  extraReducers: {
    [getCityWeather.pending.toString()]: (state) => {
      state.loading = true;
    },
    [getCityWeather.fulfilled.toString()]: (state, action) => {
      const index = state.weather.findIndex((element) => element.id === action.payload.id);
      if (index === -1) {
        state.loading = false;
        state.weather = [action.payload, ...state.weather];
        state.error = '';
      } else {
        state.loading = false;
        state.error = 'This city is already present';
      }
    },
    [getCityWeather.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateCityCard.pending.toString()]: (state) => {
      state.loading = true;
    },
    [updateCityCard.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.weather.findIndex((element, index) => {
        if (element.id === action.payload.id) {
          state.weather[index] = action.payload;
          return true;
        }
        return false;
      });
    },
    [updateCityCard.rejected.toString()]: (state) => {
      state.loading = false;
    }
  }
});
export const { deleteCity } = CityWeather.actions;
