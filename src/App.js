import "antd/dist/antd.css";
import React from "react";
import ActivityPage from "./ActivityPage/ActivityPage";
// // import UserProfilePage from "./UserProfilePage/UserProfilePage";
// // import "./App.css";
// import SingleActivityPage from "./SingleActivityPage/SingleActivityPage";
// // import Form from "./Form/Form";
// import CityItem from "./CityItem/CityItem";

export default function App() {
  const citiesArray = ["city1", "city2", "city3"];
  const dotenv = require('dotenv');
  dotenv.config()
  return (
    <div>
      <ActivityPage />

      {/* <Form citiesArray={citiesArray} /> */}
      {/* <SingleActivityPage activityName = "Hiking" tags = {citiesArray} /> */}
      {/* <UserProfilePage/> */}
      {/* <CityItem
        name="tripoli"
        imgsrc="https://lh3.googleusercontent.com/p/AF1QipPgqWWZcFz_WToLF2A8ust91aprcbGLKMWnrV47=w296-h202-n-k-rw-no-v1"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      /> */}
    </div>
  );
}