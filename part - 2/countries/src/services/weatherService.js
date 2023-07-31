import axios from 'axios'

const getWeather = (capital) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => response.data)
}

export default { getWeather }