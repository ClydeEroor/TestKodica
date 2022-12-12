import React from 'react';
//Weather Day imports
import DayClearSky from '../img/wether_day/D_clearsky.png'
import DayFewClouds from '../img/wether_day/D_fewclouds.png'
import DayRain from '../img/wether_day/D_rain.png'

//Weather General Imports
import ScatteredClouds from '../img/wether_day/D_scatteredclouds.png'
import BrokenClouds from '../img/wether_day/D_brokenclouds.png'
import ThunderStorm from '../img/wether_day/D_thunderstorm.png'
import Snow from '../img/wether_day/D_snow.png'
import Mist from '../img/wether_day/D_snow.png'
import ShowerRain from '../img/wether_day/D_showerrain.png'

// Weather Night Imports
import NightClearSky from '../img/weather_night/N_clearsky.png'
import NightFewClouds from '../img/weather_night/N_fewclouds.png'
import NightRain from '../img/weather_night/N_rain.png'

{/*<importImg weatherDescription={data?.weather.id} />*/
}
{/*    /!*@ts-ignore*!/*/
}
const ImportImg = (weatherDescription: string) => {
//


    const weatherImage = () => {

            if (weatherDescription === "11d") {
                return <ThunderStorm/>
            }
            if (weatherDescription === "09d") {
                return <ShowerRain/>
            }
            if (weatherDescription === "10d") {
                return <DayRain/>
            }
            if (weatherDescription === "10n") {
                return <NightRain/>
            }
            if (weatherDescription === "13d") {
                return <Snow/>
            }
            if (weatherDescription === "50d") {
                return <Mist/>
            }
            if (weatherDescription === "01d") {
                return <DayClearSky/>
            }
            if (weatherDescription === "01n") {
                return <NightClearSky/>
            }
            if (weatherDescription === "02d") {
                return <DayFewClouds/>
            }
            if (weatherDescription === "02n") {
                return <NightFewClouds/>
            }
            if (weatherDescription === "03d") {
                return <ScatteredClouds/>
            }
            if (weatherDescription === "03n") {
                return <ScatteredClouds/>
            }
            if (weatherDescription === "04d") {
                return <BrokenClouds/>
            }
            if (weatherDescription === "04n") {
                return <BrokenClouds/>
            }
    }


    return (
        {weatherImage}
    );
};

export default ImportImg;



