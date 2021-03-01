import React from "react";
import Dropdown from "../Dropdown/DropdownButton";
import "./DropDownsPackage.css";
import ACTIVITIES from "../data/activities.json";
import CITIES from "../data/cities.json";
import PriceFilter from "../Dropdown/PriceFilter";

export default function DropDownsPackage() {
  function handleSelect(city) {
    console.log(city.name);
    ACTIVITIES.filter((a) => city.name === a.name);
  }
  const activity = () => {
    ACTIVITIES.map((a) => a.price);
  };
  return (
    <div className="dropdown-package">
      {/* <h2>Filter </h2> */}
      <Dropdown
        activitiesArray={ACTIVITIES}
        elementArray={ACTIVITIES}
        handleSelect={handleSelect}
        elem={"name"}
        dropdownTitle={"Activities"}
        element={activity}
      />

      <Dropdown
        activitiesArray={CITIES}
        elementArray={CITIES}
        handleSelect={handleSelect}
        elem={"name"}
        dropdownTitle={"Cities"}
        element={CITIES.name}
      />
      <PriceFilter data={ACTIVITIES} />
    </div>
  );
}
