import { useState, useEffect } from 'react'
import weatherService from '../services/weatherService'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        weatherService
            .getWeather(capital)
            .then(weatherData => {
                setWeather(weatherData)
            })
    }, [])

    if (!weather) {
        return
    }
    
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature: {weather.main.temp}° Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon"></img>
            <p>wind: {weather.wind.speed} mph</p>
        </div>
    )
}

export default Weather