import * as React from "react";
import { useContext } from "react";
import { Marker } from "react-map-gl";
import "./MarkerComponent.css";
import { TooltipColor,ID } from "../../ActivityPage/ActivityPage";
import marker from "./marker.png";

function MarkerComponent(props) {
  const { data, onHover, onMouseLeave, type,key } = props;

  const TooltipColorContext = useContext(TooltipColor);
  const IDcontent = useContext(ID);

  return data.map((item, index) => (
    <Marker
      key={item.id}
      latitude={item.address_coordinates[0]}
      longitude={item.address_coordinates[1]}
    >
      {type === 1 ? (
        <span
          className={
            TooltipColorContext && item.id === IDcontent
              ? "tooltiptext tooltiptextYellow"
              : "tooltiptext tooltiptextBlue"
          }
          onMouseOver={() => setTimeout(onHover(item), 5000)}
          onMouseLeave={() => onMouseLeave(item)}
        >
          {item.price === "FREE" ? item.price : item.price + "$"}
        </span>
      ) : (
        <img src={marker} className="cityMarker" />
      )}
    </Marker>
  ));
}

export default React.memo(MarkerComponent);