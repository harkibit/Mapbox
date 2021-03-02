import React from "react";
import Dropdown from "../Dropdown/DropdownButton";
import "./DropDownsPackage.css";
import ACTIVITIES from "../data/activities.json";
import CITIES from "../data/cities.json";
import PriceFilter from "../Dropdown/PriceFilter";

export default function DropDownsPackage({handleFilter}) {
  const prices =[{name:'All'},{name:'FREE'},{name:'Less Than 15$'},{name:'Between 15-30 $'}];
  const [priceResult,setPriceResult] = React.useState([]);
  const [actResult,setActResult] = React.useState([]);
  const [cityResult,setCityResult] = React.useState([]);
  
  // handleFilter(priceResult,actResult,cityResult);
  function handleSelectAct(act) {
    const result = ACTIVITIES.filter((a) => act === a.name);
    setActResult(result);
    // console.log(actResult);
  }
  function handleSelectCity(city) {
    const result = ACTIVITIES.filter((a) => city === a.city);
    setCityResult(result);
    // console.log(cityResult);
  }
  function handleSelectPrice(select) {
        // console.log(select);
      if(select === 'All'){
        setPriceResult(ACTIVITIES);
      }
      if(select === 'FREE'){
        const result = ACTIVITIES.filter((a)=> a.price === select)
        setPriceResult(result);
      }
      if(select === 'Less Than 15$'){
        const result = ACTIVITIES.filter((a)=> a.price <= 15)
        // console.log(result);
        setPriceResult(result);
      }
      if(select === 'Between 15-30 $'){
        const result = ACTIVITIES.filter((a)=> a.price >= 15 && a.price <= 30)
        // console.log(result);
        setPriceResult(result);
      }
      // console.log(priceResult);
  }
  const handleClick = () =>{
    handleFilter(priceResult,actResult,cityResult);
    setPriceResult([]);
    setCityResult([]);
    setActResult([]);
  }
  return (
    <div className="dropdown-package">
      <Dropdown
        elementArray={ACTIVITIES}
        handleSelect={handleSelectAct}
        dropdownTitle={"Activities"}
      />
      <Dropdown
        elementArray={CITIES}
        handleSelect={handleSelectCity}
        dropdownTitle={"Cities"}
      />
      <Dropdown
        elementArray={prices}
        handleSelect={handleSelectPrice}
        dropdownTitle={"Price"}
      />
      <button onClick={handleClick}> reset </button>
    </div>
  );
}
