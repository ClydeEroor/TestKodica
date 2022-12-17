import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather } from './redux/features/weatherSlice';
import CityCards from './components/CityCards';

export const App = () => {
  const dispatch = useDispatch<any>();
  // @ts-expect-error
  const weather = useSelector((state) => state.weather);
  // @ts-expect-error ad
  const inValidCity = useSelector((state) => state.error);
  const [inputCityQuery, setInputCityQuery] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }): void => {
    setInputCityQuery(event.target.value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleData();
    }
  };

  const handleData = () => {
    const test = dispatch(getCityWeather(inputCityQuery));
    console.log(test);
    setInputCityQuery('');
  };

  return (
    <div className="w-full justify-center app">
      <div className="city-input flex justify-center w-full px-2 pt-20">
        <input
          className="rounded-3xl px-4 h-[40px] border-amber-200 border-2 bg-gray-900 text-white w-[400px]"
          placeholder="Enter city name"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          value={inputCityQuery}
        />

        <div className="relative right-24">
          <button
            className="rounded-full flex items-center justify-center w-24 h-[40px] text-[14px] text-black bg-cyan-400 hover:text-cyan-400 hover:bg-white absolute"
            onClick={handleData}
            type="submit">
            add
          </button>
        </div>
      </div>
      <div className="flex justify-center text-red-500 my-8">
        <p>{inValidCity ? inValidCity.toUpperCase() : ''}</p>
      </div>
      <div className="container flex-wrap flex flex-row justify-around ">
        {weather?.map((elem: any) => (
          <CityCards key={elem.id} data={elem} />
        ))}
      </div>
    </div>
  );
};
export default App;
