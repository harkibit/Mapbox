import * as React from 'react';
import { Rate } from 'antd';
import "./PopUpInfo.css"

function PopUpInfo(props) {
  const {info, onclick} = props;
  const displayName = `${info.name}`;
 
  return (
    <div onClick = {onclick}>
      <img width = {180} height = {130} src={info.image} className = "img-padding-popup"/>
      <div className = "container-popup">
        <div className = "popup-info-style">
        <h3 className = "city-name-popup">{displayName} </h3>
        <span>{info.rating} <Rate style = {{fontSize : "13px"}} allowHalf disabled defaultValue={info.rating} /></span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PopUpInfo);
