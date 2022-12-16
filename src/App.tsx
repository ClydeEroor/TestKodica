import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {getCityWeather} from "./redux/features/weatherSlice";
import CityCards from "./components/CityCards";


export const App = () => {
    const dispatch = useDispatch<any>()
    // @ts-ignore
    const weather = useSelector((state) => state.weather)
    // @ts-ignore
    const inValidCity = useSelector((state) => state.error)
    const [inputCityQuery, setInputCityQuery] = useState('')
    const [errorConnect, setErrorConect] = useState('')
    console.log(inValidCity)






    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCityQuery(event.target.value)
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleData()
        }
    }
    console.log(weather)
    const handleData = () => {
        // @ts-ignore
        dispatch(getCityWeather(inputCityQuery))
    }
    // Написать функцию которая передает айди карточки из weather текущей который нужно передать как квери параметр в базу чтобы получить новые данные этой карточки


    // @ts-ignore
    // @ts-ignore
    return (
        <div className="w-full justify-center app">
            <div className="city-input flex justify-center w-full px-2 pt-20">
                <input className="rounded-3xl px-4 h-[40px] border-amber-200 border-2 bg-gray-900
                 text-white w-[400px] "
                    // @ts-ignore
                       placeholder="Введите название города" onChange={handleChange}
                       onKeyDown={handleKeyDown}
                       type="text"/>

                <div className='relative right-24'>
                    <button
                        className="rounded-full flex items-center justify-center w-24 h-[40px] text-[14px] text-black bg-cyan-400 hover:text-cyan-400 hover:bg-white absolute"
                        onClick={handleData}
                        type="submit">add
                    </button>
                </div>

            </div>
            <div className="flex justify-center text-red-500 my-8"><p>{inValidCity ? inValidCity.toUpperCase()  : ''}</p></div>
            <div className="container flex-wrap flex flex-row justify-around ">
                {/*// @ts-ignore*/}
                {weather?.map((elem) => <CityCards key={elem.id} data={elem}/>)}
            </div>
        </div>
    );
}
export default App





