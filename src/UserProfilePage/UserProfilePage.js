import React from "react";
import UserInfo from "./UserInfo";
import { Divider } from 'antd';
import "./UserProfilePage.css"
import NoFavorite from "./NoFavorite";
import FavoriteList from "./FavoriteList"
export default function UserProfilePage() {
    const info = {name : "samir"}
  return (
    <div className = "user-profile-page">
        <div className = "user-profile-header">
            <UserInfo userInfo = {info}/>
        </div>
      <Divider />

      {/* <NoFavorite/> */}
      <FavoriteList/>
    </div>
  );
}
