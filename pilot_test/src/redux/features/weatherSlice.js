import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    weather: [],
}
//https://api.openweathermap.org/data/2.5/forecast?id=524901&q=Kyiv&units=metric&appid=f473cb3c4a2865e315ac74ebbd07ab80


export const getCityWeather = createAsyncThunk('/getCityWeather', async (inputCityQuery) => {
    try {
        let queryString
        if (inputCityQuery) {
         queryString = inputCityQuery
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${queryString}&appid=f473cb3c4a2865e315ac74ebbd07ab80`
        const {data, status} = await axios.get(url)
        console.log(status)


        return data
    } catch (error) {
    }
})

export const CityWeather = createSlice({
        name: 'weather',
        initialState,
        reducers: {},
        extraReducers: {
            [getCityWeather.pending]: (state) => {
                state.loading = true
            },
            [getCityWeather.fulfilled]: (state, action) => {
                state.loading = false
                state.weather = action.payload
            },
            [getCityWeather.rejected]: (state) => {
                state.loading = false

            },
        }
    }
)