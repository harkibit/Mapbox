import React, { useState } from "react";

import ActivityCardList from "./ActivityCardList";
import Map from "../MapBox/MapBox";
import "./ActivityPage.css";
import { Affix ,Divider} from "antd";
import DropDownsPackage from "../DropDownsPackage/DropDownsPackage"

import ACTIVITIES from "../data/activities.json";
import CITIES from "../data/cities.json";

export const BadgeColorContext = React.createContext();

export default function ActivityPage() {
  const [top, setTop] = useState(10);

  const [badgeColor, setBadgeColor] = useState(true)
  const toggleColor = () => {
    setBadgeColor (color => !color)
  }
  return (
    <BadgeColorContext.Provider value={badgeColor}>
      <div className="act-page">
        <div className="left-grid-column">
          <DropDownsPackage/>
          <Divider />
          <ActivityCardList activityData={ACTIVITIES} handleMap = {toggleColor}/>
        </div>

        <div>
          <Affix offsetTop={top}>
            <Map width="106"></Map>
          </Affix>
        </div>
      </div>
    </BadgeColorContext.Provider>
  );
}
