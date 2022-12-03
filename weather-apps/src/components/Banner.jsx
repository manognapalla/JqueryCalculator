import React from 'react';
import '../App.css';
import {Search} from './index';

class Banner extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let locationChange = (data) => {
            this.props.onChange(data);
        }

        return(
            <div className="banner">
                <h1>Check the weather in your area!!</h1>
                <Search onSelect={locationChange} />
                {this.props.location.name ? <p className="location"> {this.props.location.name} , {this.props.location.country}</p> : ''}

            </div>
        );
    }

}

export default Banner;