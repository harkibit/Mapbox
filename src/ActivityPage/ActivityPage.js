import React, { useState } from "react";

import ActivityCardList from "./ActivityCardList";
import ActivitiesMap from "./ActivitiesMap";
import CityMap from "../MapBox/CityMap";

import "./ActivityPage.css";
import { Affix, Divider } from "antd";
import DropDownsPackage from "../DropDownsPackage/DropDownsPackage";

import ACTIVITIES from "../data/activities.json";
import CITIES from "../data/cities.json";

export const TooltipColor = React.createContext();
export const ID = React.createContext();

export default function ActivityPage() {
  const [top, setTop] = useState(10);

  const [hover, setHover] = useState(false);
  const [id, setId] = useState(null);
  const handleMouseOver = (elem) => {
    setHover(true);
    // setId(elem.id)
  };
  const handleMouseLeave = (elem) => {
    setHover(false);
    // setId(null)
  };
  return (
    <TooltipColor.Provider value={hover}>
      <ID.Provider value = {id}>
      <div className="act-page">
        <div className="left-grid-column">
          <DropDownsPackage />
          <ActivityCardList
            activityData={ACTIVITIES}
            handleMouseOver={(e) => handleMouseOver(e)}
            handleMouseLeave={(e) => handleMouseLeave(e)}
          />
        </div>

        <div className="right-grid-column">
          <Affix offsetTop={top}>
            <ActivitiesMap />
            {/* <CityMap/> */}
          </Affix>
        </div>
      </div>
      </ID.Provider>
    </TooltipColor.Provider>
  );
}
