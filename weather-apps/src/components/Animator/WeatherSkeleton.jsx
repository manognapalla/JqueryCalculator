import React, { Component } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import '../../App.css'
class WeatherSkeleton extends Component {
    
    render() {

        return (
            <div className="weather-skeleton">
                <Skeleton variant="text" height={80}/>
                <Skeleton variant="text" height={30}/>
                <Skeleton variant="circle" width={100} height={100} className="skeleton-icon"/>
                <Skeleton variant="text" height={100}/>
               
            </div>
        )
    }
}

export default WeatherSkeleton;