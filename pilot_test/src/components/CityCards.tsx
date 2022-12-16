import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {deleteCity,  updateCityCard} from '../redux/features/weatherSlice'
import {useDispatch} from "react-redux";


const CityCards = ({data}: { data: any }) => {

    const dispatch = useDispatch<any>()

    const deleteHandler = () => {
        dispatch(deleteCity({id: data.id}))
    }
    const handleUpdate = () => {
        // @ts-ignore
        dispatch(updateCityCard(data.id))

    }
    return (
        <div>
            {data ? <div
                className="my-4  bg-cyan-900 min-w-full rounded-3xl border-orange-200 border-4 ">
                <div className="CityCards flex flex-row relative min-h-[200px]">
                    <div className="weather flex flex-col justify-between">
                        <div className="flex bg-fuchsia-200 rounded-[20px] z-20  card  flex-row justify-center items-center">
                            <div>
                                <div><img className="max-w-[80px]" src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                                          alt={data.id}/></div>
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
                            <button onClick={deleteHandler} className="bg-white mb-0 px-2 rounded-full hover:bg-red-500 hover:text-white">Delete</button>
                            <button onClick={handleUpdate} className="bg-white mb-0 rounded-full px-2 hover:bg-blue-700 hover:text-white">Update</button>
                        </div>
                    </div>
                </div>
            </div> : "введите данные"}
        </div>
    );
};

export default CityCards;
