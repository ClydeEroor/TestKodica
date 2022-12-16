import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    weather: [],
    error:"",
}
//https://api.openweathermap.org/data/2.5/forecast?id=524901&q=Kyiv&units=metric&appid=f473cb3c4a2865e315ac74ebbd07ab80

// @ts-ignore
export const getCityWeather = createAsyncThunk('/getCityWeather', async (inputCityQuery) => {
    try {
        let queryString
        if (inputCityQuery) {
            queryString = inputCityQuery
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${queryString}&appid=f473cb3c4a2865e315ac74ebbd07ab80`
        const { data, status} = await axios.get(url)
        return data
    } catch (error) {
        throw error.response.data
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
        const {data, status} = await axios.get(url)
        console.log(data)
        return data
    //     703448 kiev
    //     2643743 London

    } catch (error) {
        console.log(error)
    }
})

// @ts-ignore
export const CityWeather = createSlice({
        name: 'weather',
        initialState,
        reducers: {
            deleteCity: (state,action) => {
                state.weather = state.weather.filter(elem => elem.id !== action.payload.id)
            },

        },
        extraReducers: {
            [getCityWeather.pending]: (state) => {
                state.loading = true
            },
            [getCityWeather.fulfilled]: (state, action) => {
                state.loading = false
                state.weather = [...state.weather,action.payload]
                state.error = ''
            },
                [getCityWeather.rejected]: (state,action) => {
                state.loading = false
                state.error = action.error.message
            },
            [updateCityCard.pending]: (state) => {
                state.loading = true
            },
            [updateCityCard.fulfilled]: (state, action) => {
                state.loading = false
                state.updateWeather = action.payload

                console.log(current(state))
                console.log("_______---------___________---------______")
                state.weather.findIndex((element,index,array) => {
                    if (element.id === action.payload.id) {
                         state.weather[index] = action.payload

                        return true
                    }

                })

            },
            [updateCityCard.rejected]: (state) => {
                state.loading = false
                // state.error = action.error.message
            },
        }
    }
)
export const { deleteCity } = CityWeather.actions
