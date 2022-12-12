import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {getCityWeather} from "./redux/features/weatherSlice";
import CityCards from "./components/CityCards";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
// import {Reorder} from "framer-motion";


export const App = () => {
    const dispatch = useDispatch<any>()

    // @ts-ignore
    const {weather} = useSelector((state) => state.weather)
    const [openData, setOpenData] = useState(false)
    const [inputCityQuery, setInputCityQuery] = useState('')
    const [cities, setCities] = useState<Array<any>>([])
    //Вставить cityes в редакс
    //Redux with Local Storage


    // @ts-ignore

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCityQuery(event.target.value)
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleData()
        }
    }

    const handleData = () => {
        setOpenData(true)
        setCities([...cities, weather])
        setInputCityQuery('')
        console.log(inputCityQuery)
    }




    useEffect(() => {
        // @ts-ignore
        dispatch(getCityWeather(inputCityQuery))
    }, [dispatch, inputCityQuery]);


    return (
        <div className="w-full justify-center app">
            <div className="city-input flex justify-center w-full px-2 py-5">
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
            <div className="container flex-wrap flex flex-row justify-around ">
                {openData ? cities.map((elem) => <CityCards key={elem} data={elem}/>) : null}
            </div>
        </div>
    );
}
export default App





