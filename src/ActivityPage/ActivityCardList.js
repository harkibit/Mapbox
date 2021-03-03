import React, { useState } from "react";
import ActivityItem from "../ActivityItem/ActivityItem";
import "./ActivityPage.css";
import { Pagination, Spin, Skeleton } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { CloseOutlined } from '@ant-design/icons';

export default function ActivityCardList(props) {
  const {activityData, handleMouseOver,handleMouseLeave} = props
  
  let length = 0;
  const [current, setCurrent] = useState();
  

  const [filteredOutdoor, setFilteredOutdoor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show,setShow] = useState(false)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const filterOutdoor = () => {
    setShow(!show)
    setLoading(true);
    console.log(loading)
    
    setTimeout(() => setLoading(false), 2000);
    console.log(loading)
    setFilteredOutdoor(!filteredOutdoor);
  };

  // pagination
  const originTargetKeys = activityData.filter(item => +item.id % 3 > 1).map(item => item.id);
  const [targetKeys,setTargetKeys] = useState(originTargetKeys)
  const onChange = nextTargetKeys => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div className="ActivityList">
      <div className="result-sort">
        <span className="results-number">{activityData.length} results</span>
        <span className="only-outdoor" onClick={filterOutdoor}>
          Only outdoor activities 
          {show ? <CloseOutlined /> : ""}
        </span>
      </div>

      {filteredOutdoor ? (
        loading ? (
          <div className="loading">
            {/* spinning={loading} */}
            <Spin className="spinner" indicator={antIcon}  />
            {[1,2,3].map(e => <> <Skeleton.Input style={{ width: "90%", height: "200px" }} active /> <br/></>)}
          </div>
        ) : (
          activityData
            .filter((activity) => activity.type === "Outdoor Activity")
            .slice(0, 10)
            .map((activity) => {
              {length = activityData.filter((activity) => activity.type === "Outdoor Activity").length}
              return <>
                <ActivityItem
                  index={activity.id}
                  imgsrc={activity.image}
                  name={activity.name}
                  tags={activity.related_tags}
                  cityName={activity.city}
                  price={activity.price}
                  rating={activity.rating}
                  handleMouseOver = {handleMouseOver}
                  handleMouseLeave = {handleMouseLeave}
                />
              </>
            })
        )
      ) : (
        activityData.slice(0, 10).map((activity) => {
          {length = activityData.length}

          return <>
            <ActivityItem
              index={activity.id}
              imgsrc={activity.image}
              name={activity.name}
              tags={activity.related_tags}
              cityName={activity.city}
              price={activity.price}
              rating={activity.rating}
              handleMouseOver = {handleMouseOver}
              handleMouseLeave = {handleMouseLeave}
            />
          </>
        })
      )}
      <div className="pagination">
        <Pagination
          current={targetKeys}
          onChange={onChange}
          defaultCurrent={1}
          defaultPageSize={length}
          total={length + 1}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </div>
    </div>
  );
}
