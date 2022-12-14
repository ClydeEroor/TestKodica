import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {CityWeather} from "./features/weatherSlice";




// if you have more 1 reducer add it in to the RootReducer
// const rootReducer = {
//     weather: CityWeather.reducer,
// }
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, CityWeather.reducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)
export default store


// export default configureStore({
//     reducer: {
//         weather: CityWeather,
//     },
// })


// export const store = configureStore({
//     reducer: {
//         weather: CityWeather.reducer,
//     },
// })