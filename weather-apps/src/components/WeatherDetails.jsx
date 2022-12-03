import React, { Component } from 'react'
import { withRouter } from "react-router";
import {WeatherIcon} from './index';
import { formatAMPM , getWeathericon , getWeatherIconColor, getDay} from './helper';
import { Link } from 'react-router-dom';


class WeatherDetails extends Component {
    constructor(props){
        super(props);
        this.fetchDayData = this.fetchDayData.bind(this);
        this.setDetails = this.setDetails.bind(this);
        this.state = {
            day:this.props.match.params.day,
            data:this.props.payload,
            newData:[]
        }
    }

    weatherDetails = [];

    componentDidMount() {
        this.fetchDayData();
    }

    fetchDayData(){
        this.state.newData = this.state.data.filter((el) =>{
            if(getDay(el.dt_txt) == this.state.day){
                return el;
            }
        });

        this.setDetails();
    }

    setDetails(){
        this.weatherDetails = 
        this.state.newData.map((el,i) => (
            <div key={i} className="details-day">
                <p className="details-time">{formatAMPM(el?.dt_txt)}</p>
                <WeatherIcon color={getWeatherIconColor(el?.weather[0].main)} icon={getWeathericon(el?.weather[0].main)}/>
                <p className="details-temp">{el?.main?.temp}</p>
            </div>
        ))
        this.setState({...this.state});

    }
    
    render() {
        return (
            <div>
                <label className="back-btn">
                    <Link to="/" >Go Back</Link>
                </label>

                <div className="details-wrapper">
                    <h1>{this.state.day}</h1>
                    <div>{this.weatherDetails}</div>
                </div>
            </div>
        )
    }
}

export default  withRouter(WeatherDetails);