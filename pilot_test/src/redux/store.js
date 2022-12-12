import { configureStore } from '@reduxjs/toolkit'
import { CityWeather } from "./features/weatherSlice";

export const store = configureStore({
    reducer: {
        weather: CityWeather.reducer,
    },
})