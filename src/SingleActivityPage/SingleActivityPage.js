import React, { useState } from "react";
import "./SingleActivityPage.css";
import { Divider, Tooltip,PageHeader } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import ActivitiesCarousel from "../ActivitiesCarousel/ActivitiesCarousel";

export default function SingleActivityPage(props) {
  const { activityName, tags } = props;

  const actPicArray = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_er4LliU-OHQCiYlMWE5q69wpsnMumByqxw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_er4LliU-OHQCiYlMWE5q69wpsnMumByqxw&usqp=CAU",
  ];
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="single-act-container">
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Back"
            className = "back-btn"
        />
      <div className="grid-view">
        <div className="left-side-grid">
          <div className="header">
            <div className="header-child-1">
              <h1>{activityName}</h1>
              <Tooltip
                placement="top"
                title={like ? "add to favorite" : "remove from favorite"}
              >
                {like ? (
                  <HeartOutlined
                    className="heartOutlined heartSize"
                    onClick={toggleLike}
                  />
                ) : (
                  <HeartFilled
                    className="heartFilled heartSize"
                    onClick={toggleLike}
                  />
                )}
              </Tooltip>
            </div>
            <Divider />
            <div className="header-child-2">
              {tags && tags.map((tag) => <span>{tag}</span>)}
            </div>
          </div>
          <div className="left-grid-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="left-grid-tour-guide">
              <div className = "hire-box">
                <h2>Need A Tour Guide?</h2>
                <button className = "hire-btn">See Available tour guides</button>
              </div>
            
          </div>
        </div>

        <div>
          <ActivitiesCarousel actPicArray={actPicArray} carWidth={"61rem"} />
        </div>
      </div>
    </div>
  );
}
