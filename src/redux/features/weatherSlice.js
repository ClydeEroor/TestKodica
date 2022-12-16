import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    weather: [],
    error: "",
}
//https://api.openweathermap.org/data/2.5/forecast?id=524901&q=Kyiv&units=metric&appid=f473cb3c4a2865e315ac74ebbd07ab80

export const getCityWeather = createAsyncThunk('/getCityWeather', async (inputCityQuery) => {
    try {
        let queryString
        if (inputCityQuery) {
            queryString = inputCityQuery
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${queryString}&appid=f473cb3c4a2865e315ac74ebbd07ab80`
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        if (error?.response?.data) {
            throw error.response.data
        } else {
            throw error
        }
    }
})
export const updateCityCard = createAsyncThunk('/updateCityCard', async (cityId) => {
    try {
        let queryIdString
        if (cityId) {
            queryIdString = cityId
        }
        //
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${cityId}&appid=f473cb3c4a2865e315ac74ebbd07ab80`
        const {data} = await axios.get(url)
        return data

    } catch (error) {
        console.log(error)
    }
})

export const CityWeather = createSlice({
        name: 'weather',
        initialState,
        reducers: {
            deleteCity: (state, action) => {
                state.weather = state.weather.filter(elem => elem.id !== action.payload.id)
            },

        },
        extraReducers: {
            [getCityWeather.pending]: (state) => {
                state.loading = true
            },
            [getCityWeather.fulfilled]: (state, action) => {
                state.loading = false
                state.weather = [...state.weather, action.payload]
                state.error = ''
            },
            [getCityWeather.rejected]: (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
            [updateCityCard.pending]: (state) => {
                state.loading = true
            },
            [updateCityCard.fulfilled]: (state, action) => {
                state.loading = false
                state.updateWeather = action.payload
                state.weather.findIndex((element, index) => {
                    if (element.id === action.payload.id) {
                        state.weather[index] = action.payload
                        return true
                    }
                })
            },
            [updateCityCard.rejected]: (state) => {
                state.loading = false
            },
        }
    }
)
export const {deleteCity} = CityWeather.actions