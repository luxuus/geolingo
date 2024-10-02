'use client'

import { useRef, useEffect } from 'react'
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  const mapRef = useRef<Map>()
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    if (!accessToken) {
      throw new Error('Mapbox API key is missing. Make sure it is set in the environment variables.');
    }
    mapboxgl.accessToken = accessToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      center: [ 2, 43 ],
      zoom: 5
    });

  }, [])

  return (
      <div id='map-container' style={{ height:'400px', aspectRatio:'1/1'}} ref={mapContainerRef} />
  )
}
