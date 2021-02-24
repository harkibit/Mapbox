import * as React from "react";
import { Marker } from "react-map-gl";
import "./Map.css";

function Pins(props) {
  const { data, onHover, onMouseLeave, badgeStyle } = props;

  return data.map((activity, index) => (
    <Marker
      key={activity.id}
      latitude={activity.address_coordinates[0]}
      longitude={activity.address_coordinates[1]}
    >
      <span
        className= {!badgeStyle? "tooltiptext tooltiptextYellow" : "tooltiptext tooltiptextBlue"}
        onMouseOver={() => setTimeout(onHover(activity), 5000)}
        onMouseLeave={() => onMouseLeave(activity)}
      >
        {activity.price}
      </span>
    </Marker>
  ));
}

export default React.memo(Pins);

// for cities
// <Marker key={`marker-${index}`} longitude={city.lng} latitude={city.lat}>
