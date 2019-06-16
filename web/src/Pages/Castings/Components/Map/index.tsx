import * as React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'

const deafultPosition = {
    lat: 52.0685,
    lng: 19.9475
}

export const Map = () => (
    <LeafletMap center={deafultPosition} zoom={6}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'"
        />
    </LeafletMap>
)
