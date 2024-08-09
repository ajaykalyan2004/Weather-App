import React from 'react' 
import './Weather App.css'

import search_icon from '../assets/sunset.jpg'

const WeatherApp = () =>{
    return (
        <div>
            <div className="container">
               <input type="text" className="cityInput" placeholder='search' />
               
            </div>
        </div>
        )
}

export default WeatherApp;