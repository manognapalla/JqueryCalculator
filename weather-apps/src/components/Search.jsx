import React, { Component } from 'react'
import Autocomplete from 'react-google-autocomplete';


class Search extends Component {
    render() {
        return (
            <div className="search-bar">
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        // console.log(place);
                        this.props.onSelect({address:place.formatted_address,lat:place.geometry.location.lat(),lng:place.geometry.location.lng()});
                    }}
                    types={['(regions)']}
                />
        
            </div>
        )
    }
}

export default Search;
