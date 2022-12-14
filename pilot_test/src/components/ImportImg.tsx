import React from 'react';

{/*<importImg weatherDescription={data?.weather.id} />*/}
{/*    /!*@ts-ignore*!/*/}
const ImportImg = ({weatherDescription}: { weatherDescription: any }) => {

        const weatheImg = [
            {id: "01d", src: "http://openweathermap.org/img/wn/01d@2x.png"},
            {id: "01n", src: "http://openweathermap.org/img/wn/01n@2x.png"},
            {id: "02d", src: "http://openweathermap.org/img/wn/02d@2x.png"},
            {id: "02n", src: "http://openweathermap.org/img/wn/02n@2x.png"},
            {id: "03d", src: "http://openweathermap.org/img/wn/03d@2x.png"},
            {id: "03n", src: "http://openweathermap.org/img/wn/03n@2x.png"},
            {id: "04d", src: "http://openweathermap.org/img/wn/04d@2x.png"},
            {id: "04n", src: "http://openweathermap.org/img/wn/04n@2x.png"},
            {id: "09d", src: "http://openweathermap.org/img/wn/09d@2x.png"},
            {id: "09n", src: "http://openweathermap.org/img/wn/09n@2x.png"},
            {id: "10d", src: "http://openweathermap.org/img/wn/10d@2x.png"},
            {id: "10n", src: "http://openweathermap.org/img/wn/10n@2x.png"},
            {id: "11d", src: "http://openweathermap.org/img/wn/11d@2x.png"},
            {id: "11n", src: "http://openweathermap.org/img/wn/11n@2x.png"},
            {id: "13d", src: "http://openweathermap.org/img/wn/13d@2x.png"},
            {id: "13n", src: "http://openweathermap.org/img/wn/13n@2x.png"},
            {id: "50d", src: "http://openweathermap.org/img/wn/50d@2x.png"},
            {id: "50n", src: "http://openweathermap.org/img/wn/50n@2x.png"},
        ]
        //ts-ignore
        const selectWeather = () => {
            return weatheImg.map((elem) => {
                if (elem.id === weatherDescription) {
                    return <img src={elem.src}  alt={elem.id}/>
                }
            })
        }

    return (
            <div>
                {selectWeather()}
            </div>
        );


    }

    export default ImportImg;
