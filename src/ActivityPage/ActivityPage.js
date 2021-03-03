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
  const [checked, setChecked] = useState([]);
  const handleMouseOver = (id) => {
    setHover(true);
    setId(id);
  };
  const handleMouseLeave = (id) => {
    setHover(false);
    setId(null);
  };
  const handleFilter = (priceResult,actResult,cityResult)=>{
    if(cityResult.length !== 0 && actResult.length === 0 && priceResult.length === 0){
      setChecked(cityResult);
    }
    if(actResult.length !== 0 && cityResult.length === 0 && priceResult.length === 0){
      setChecked(actResult);
    }
    if(priceResult.length !== 0 && actResult.length === 0 && cityResult.length === 0){
      setChecked(priceResult);
    }
  if(cityResult.length !== 0 && actResult.length !== 0 && priceResult.length === 0){
    const res = [];
    actResult.forEach((a)=>{
      cityResult.forEach((c)=> {
        if(a === c)
       { res.push(a);
        }
      })
    })
    setChecked(res);
 } else if(cityResult.length !== 0 &&  priceResult.length !== 0 && actResult.length === 0){
  const res = [];
  priceResult.forEach((a)=>{
    cityResult.forEach((c)=> {
      if(a === c)
      res.push(a);
    })
  })
  setChecked(res);
} else if(actResult.length !== 0 && priceResult.length !== 0  && cityResult.length === 0){
  const res = [];
  actResult.forEach((a)=>{
    priceResult.forEach((c)=> {
      if(a === c)
     {  res.push(a);}
    })
  })
  setChecked(res);
} else if(cityResult.length !== 0 && actResult.length !== 0 && priceResult.length !== 0 ){
  const res = [];
  actResult.forEach((a)=>{
    cityResult.forEach((c)=> {
      if(a === c)
     { priceResult.forEach((p)=>{if(a === p){ res.push(a);}})
    }})
  })
  setChecked(res);
  }
  console.log('checked :', checked);
  }
  return (
    <TooltipColor.Provider value={hover}>
      <ID.Provider value = {id}>
      <div className="act-page">
        <div className="left-grid-column">
          <DropDownsPackage handleFilter={handleFilter}/>
          {checked.length === 0 ? <ActivityCardList
            activityData={ACTIVITIES}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={ handleMouseLeave}
          /> : <ActivityCardList
          activityData={checked}
          handleMouseOver={handleMouseOver}
          handleMouseLeave={ handleMouseLeave}
        /> }
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