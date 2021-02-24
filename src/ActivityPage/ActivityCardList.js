import React from "react";
import ActivityItem from "../ActivityItem/ActivityItem";
import "./ActivityPage.css";
import { Button,Dropdown,Menu } from 'antd';
import { RightOutlined, LeftOutlined, DownOutlined } from '@ant-design/icons';

export default function ActivityCardList({ activityData,handleMap }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Highest Rate
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
  return (
    <div className="ActivityList">
      <div className = "result-sort">
        <span className = "results-number">{activityData.length} results</span>
        {/* rated , outdoor activity first */}
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <span>Sort by <DownOutlined /></span>
          </a>
        </Dropdown>
      </div>
      
      {activityData &&
        activityData.slice(0,10).map((activity) => {
          return (
            <>
              <ActivityItem
                key={activity.id}
                imgsrc={activity.image}
                name={activity.name}
                tags={activity.related_tags}
                cityName={activity.city}
                price={activity.price}
                rating={activity.rating}
                handleMapTooltip={handleMap}
              />
            </>
          );
        })}
        <div className = "prev-next">
          <div className = "prev-next-buttons">
          <Button size='large' className = "buttons-prev"> <LeftOutlined />previous</Button>
          <Button size='large' className = "buttons-next">Next <RightOutlined /></Button>
          </div>
          <div className = "results-number">
            Showing results 1 – 10 of {activityData.length + 1}
          </div>
        </div>
    </div>
  );
}
