import React from 'react'
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImportImg from "./ImportImg";




const CityCards =  ({data}: { data: any }) => {


    return (
        <div>
            { data ? <div
                className="px-12 my-4 bg-opacity-50 bg-gray-700 min-w-full min-w-[200] rounded-3xl border-orange-200 border-4">
                <div className="CityCards flex flex-row relative pt-2 min-h-[200px]">
                    <div className="weather flex flex-col justify-between relative">
                        <div className="General_information flex flex-row justify-center items-center">
                            <div className="City pr-2">
                                <h1 className="text-2xl">{data?.name}</h1>
                            </div>
                            <div className="temperature text-xl text-fuchsia-50">
                                <h2>{data?.main?.temp?.toFixed()} ℃</h2>
                            </div>
                            {/*// @ts-ignore*/}
                            <div>  <ImportImg weatherDescription={data?.weather[0].icon} key={}/></div>

                                {/*// @ts-ignore*/}
                            {/*<importImg weatherDescription={data?.weather.id} />*/}
                        </div>
                        <div className="detail_information flex flex-col items-center">
                            <div className="Max_temp">
                                <p>Feels like: {data?.main.feels_like.toFixed()}℃</p>
                            </div>
                            <div className="Max_temp">
                                <p>Max: {data?.main.temp_max.toFixed()}℃ </p>
                            </div>
                            <div className="Min_temp">
                                <p>Min: {data?.main.temp_min.toFixed()}℃</p>
                            </div>
                            <div className="humidity">
                                <h3>Humidity: {data?.main.humidity}%</h3>
                            </div>
                            <div className="wind">
                                <h3>Wind: {data?.wind.speed.toFixed()}М/с </h3>
                            </div>
                        </div>
                        <button className="bg-white rounded-tl-full mb-0  rounded-tr-full ">Update</button>
                    </div>
                </div>
            </div> : "введите данные"}
        </div>
    );
};

export default CityCards;
