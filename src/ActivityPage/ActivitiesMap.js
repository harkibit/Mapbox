import React from "react";
import MapBox from "../MapBox/Map";
import ACTIVITIES from "../data/activities.json";

export default function ActivitiesMap() {
  return (
    <div>
      <MapBox
        long={36.01043}
        lat={34.24815}
        zoomNb={8.9}
        infoType = {1}
        width="106"
        height="98ch"
        data={ACTIVITIES}
      />
    </div>
  );
}
