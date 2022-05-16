import React from 'react';
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {Map} from "./index";



const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY, 'this api')

const defaultCenter = {
    lat: 51.509865,
    lng: -0.118092,
};

const libraries = ['places']

const GoogleMapFinal = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: API_KEY,
        libraries
    })

    return (
        <div>
            <div>
                {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2>}
            </div>

        </div>
    );
};

export default GoogleMapFinal;