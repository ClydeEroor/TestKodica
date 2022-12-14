import React, { useState } from 'react';
import { deleteCity, updateCityCard } from '../redux/features/weatherSlice';
import WeatherDetailsModal from './WeatherDetailsModal';
import { useAppDispatch } from '../redux/store';
import { CityWeatherData } from '../utils/constants';

const CityCards = ({ data }: { data: CityWeatherData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const deleteHandler = () => {
    dispatch(deleteCity({ id: data.id }));
  };

  const handleUpdate = async () => {
    await dispatch(updateCityCard(data.id));
  };

  return (
    <div>
      <div className="my-4  bg-cyan-900 rounded-3xl min-h-50 min-w-[200px] mx-5 border-orange-200 border-4 sm:flex-col">
        <div className="CityCards flex flex-row justify-center ">
          <div className="weather flex flex-col justify-between w-full">
            <div className="flex bg-fuchsia-200 rounded-[20px] card  flex-row justify-center items-center">
              <div>
                <div>
                  <img
                    className="max-w-[80px]"
                    src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                    alt={data?.weather[0].description}
                  />
                </div>
              </div>
              <div className="City pr-5">
                <h1 className="text-2xl">{data?.name}</h1>

                <h2 className="text-white">{data?.main?.temp?.toFixed()} ℃</h2>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center text-white">
              <div className="py-1">
                <p>Feels like: {data?.main.feels_like.toFixed()}℃</p>
              </div>
              <div className="py-1">
                <p>Max: {data?.main.temp_max.toFixed()}℃ </p>
              </div>
              <div className="py-1">
                <p>Min: {data?.main.temp_min.toFixed()}℃</p>
              </div>
              <div className="py-1">
                <h3>Humidity: {data?.main.humidity}%</h3>
              </div>
              <div className="py-1">
                <h3>Wind: {data?.wind.speed.toFixed()}М/с </h3>
              </div>
            </div>
            <div className="flex flex-row my-4  justify-around">
              <button
                onClick={deleteHandler}
                className="bg-white mb-0 px-2 rounded-full hover:bg-red-500 hover:text-white">
                Delete
              </button>
              <button
                onClick={handleUpdate}
                className="bg-white mb-0 rounded-full px-2 hover:bg-blue-700 hover:text-white">
                Update
              </button>
            </div>
            <button
              onClick={() => setIsOpenModal(true)}
              className="bg-yellow-300 mb-0 rounded-full p-2 hover:bg-green-400 hover:text-white">
              Details
            </button>
          </div>
        </div>
      </div>
      <WeatherDetailsModal
        cityId={data.id}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default CityCards;
