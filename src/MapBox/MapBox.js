import * as React from 'react';
import { useState, useContext, useEffect} from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from './ControlPanel';
import Pins from "./Pin"
import ACTIVITIES from "../data/activities.json"
import CityInfo from "./CityInfo"
import "./Map.css"
import { BadgeColorContext } from '../ActivityPage/ActivityPage';

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function Map({width}) {
  const [viewport, setViewport] = useState({
    width: width+ "%",
    height: "98vh",
    latitude: 34.248150,
    longitude: 36.010430,
    zoom: 8.9
  });
  const onSelectCity = () => {
    setViewport({
      latitude : 34.248150,
      longitude: 36.010430,
      zoom: 8.9,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    })
  }

  useEffect(() => {
    const listener = (e) => {
      if(e.key === "Escape"){
        setPopupInfo(null);
      }
    }
    window.addEventListener("keydown",listener)
  }, [])


  const [popupInfo, setPopupInfo] = useState(null);
  const removePopUp = () => setPopupInfo(null)
  
  const badgeColor = useContext(BadgeColorContext)
  const badgeStyle = {
    backgroundColor : badgeColor ? "#0091EA" : "#fadb14"
  }
  return (
    <ReactMapGL
      {...viewport}
      className = "Map"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle = "mapbox://styles/hibaabdelk/ckl83yd1428pa17nybmm02s4d"
      mapboxApiAccessToken = "pk.eyJ1IjoiaGliYWFiZGVsayIsImEiOiJja2w4Mzh5d2wwbjBvMnJyMmp6ZnAzb2p6In0.FIowvm4NTM-Ok20GCrQUAA"
    >

      <Pins data={ACTIVITIES} onHover={setPopupInfo} onMouseLeave = {removePopUp} badgeStyle = {badgeStyle}/>
      {popupInfo && (
          <Popup
            tipSize={4}
            anchor="top"
            className = "popup-styling"
            longitude={popupInfo.address_coordinates[1]}
            latitude={popupInfo.address_coordinates[0]}
            closeOnClick={false}
            onClose={setPopupInfo}
            
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

      <GeolocateControl className="geolocateStyle" />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle}/>
      <ScaleControl style={scaleControlStyle} />
      <ControlPanel onSelectCity={onSelectCity} />
    </ReactMapGL>

  );
}

// mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}