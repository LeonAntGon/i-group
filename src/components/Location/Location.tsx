"use client"
import { Map } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Transition } from "../Transition"
import { MarkerHouse } from './MarkerHouse'
import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';



const words = ["Rio Negro", "Santa Crúz", "Tierra del fuego"];

export function Location() {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

const coordinatePoint = {
    lat: -42.402413,
    lng: -67.336068
}

const centerMarker = (position : {lat: number, lng: number}, fnMap: Map) => {
    fnMap.flyTo({
        lat :position.lat,
        lng: position.lng
    })
}
    return (
        <Transition className="px-4 py-8 md:py-44 md:px-36">
            <h4 className="text-center text-secondary" id="location">Localización</h4>
           
                <div className="relative h-20 w-[auto] overflow-hidden mx-auto">
                <h2 className="max-w-2xl mx-auto my-4 mb-8 text-2xl font-semibold text-center ">Destacados</h2>
                    
                </div>
                

            <MapContainer center={coordinatePoint} zoom={6} scrollWheelZoom={false} className="h-[600px] w-full">
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            />
                <MarkerHouse selectMarker={centerMarker} />
            </MapContainer>

        </Transition>
    )
}
