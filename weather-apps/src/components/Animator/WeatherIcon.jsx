import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

class WeatherIcon extends Component {
    constructor(props){
        super(props);
        this.state = {
            icon: props.icon || 'CLEAR_DAY',
            color: props.color || 'black',
            size: 80,
            animate: true
        }
    }
       
    render() {
        return (
            <ReactAnimatedWeather
                icon={this.state.icon}
                color={this.state.color}
                size={this.state.size}
                animate={this.state.animate}
          />
        )
    }
}

export default WeatherIcon;
