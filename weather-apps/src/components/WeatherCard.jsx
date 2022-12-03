import React, { Component } from 'react'
import '../App.css'
import { WeatherIcon } from './index';
import { getWeathericon, getDate , getDay , getWeatherIconColor} from './helper';

class WeatherCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            payload:props.payload
        }
    }

    render() {
        return (
            <div className="card">
                <h2>{getDay(this.props?.payload?.dt_txt)}</h2>
                <p>{getDate(this.props?.payload?.dt_txt)}</p>
                <WeatherIcon icon={getWeathericon(this.props?.payload?.weather[0]?.main)} color={getWeatherIconColor(this.props?.payload?.weather[0]?.main)}/>
                <h3>{this.props?.payload?.main?.temp}</h3>
                <span className="temp-detail">
                    <label>Min: {this.props?.payload?.main?.temp_min}</label>
                    <label>Max: {this.props?.payload?.main?.temp_max}</label>
                </span>
                <p>{this.props?.payload?.weather[0]?.main}</p>
            </div>
        )
    }
}


export default WeatherCard;