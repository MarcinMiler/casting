import * as React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

const defaultPosition = {
    lat: 52.0685,
    lng: 19.9475
}

interface Position {
    lat: number
    lng: number
}

interface Props {
    onClick?: (e: LeafletMouseEvent) => void
    markers?: Position[]
}

export const Map: React.FC<Props> = ({ onClick, markers = [] }) => (
    <LeafletMap center={defaultPosition} zoom={6} onClick={onClick}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'"
        />

        {markers.map(marker => (
            <Marker key={`${marker.lat}-${marker.lng}}`} position={marker} />
        ))}
    </LeafletMap>
)
