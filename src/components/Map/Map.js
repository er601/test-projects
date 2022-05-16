import React from 'react'
import {GoogleMap} from "@react-google-maps/api";
import s from './Map.css'

const containerStyle = {
    width: '500px',
    height: '450px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center'
}

const defaultOptions = {
    pnaControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
}


const Map = ({center}) => {

    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])


    return (
        <div className='main-map'>

            <div className={s.container}>
                <GoogleMap
                    mapContainerClassName='map-container'
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaultOptions}
                >
                {/*    { /* Child components, such as markers, info windows, ect. */ }
                    <></>
                </GoogleMap>
            </div>
        </div>

    )
}

export { Map } ;

