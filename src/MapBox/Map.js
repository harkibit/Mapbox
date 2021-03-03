import * as React from 'react';
import { useState, useContext } from 'react';
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
import MarkerComponent from "./Markers/MarkerComponent"
import PopUpInfo from "./PopUpInfo"
import "./Map.css"

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

export default function Map(props) {
  const { width, height, data,long, lat, zoomNb, infoType } = props

  const [viewport, setViewport] = useState({
    width: width + "%",
    height: height,
    latitude: lat,
    longitude: long,
    zoom: zoomNb
  });
  const onSelectCity = () => {
    setViewport({
      latitude : lat,
      longitude: long,
      zoom: zoomNb,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    })
  }

  const [popupInfo, setPopupInfo] = useState(null);
  const removePopUp = () => setPopupInfo(null)
  
  return (
    <ReactMapGL
      {...viewport}
      className = "Map"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle = "mapbox://styles/hibaabdelk/ckl83yd1428pa17nybmm02s4d"
      mapboxApiAccessToken = "pk.eyJ1IjoiaGliYWFiZGVsayIsImEiOiJja2w4Mzh5d2wwbjBvMnJyMmp6ZnAzb2p6In0.FIowvm4NTM-Ok20GCrQUAA"
    >

      <MarkerComponent data={data} onHover={setPopupInfo} onMouseLeave = {removePopUp} type = {infoType} />
      {popupInfo && (
          <Popup
            tipSize={4}
            anchor="top"
            longitude={popupInfo.address_coordinates[1]}
            latitude={popupInfo.address_coordinates[0]}
          >
            <PopUpInfo info={popupInfo} infoType = {infoType} />
          </Popup>
        )}

      <GeolocateControl style = {geolocateStyle}/>
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle}/>
      <ScaleControl style={scaleControlStyle} />
      <ControlPanel onSelectCity={onSelectCity} />
    </ReactMapGL>

  );
}

// mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
// mapboxApiAccessToken = "pk.eyJ1IjoiaGliYWFiZGVsayIsImEiOiJja2w4Mzh5d2wwbjBvMnJyMmp6ZnAzb2p6In0.FIowvm4NTM-Ok20GCrQUAA"