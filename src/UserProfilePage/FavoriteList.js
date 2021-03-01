import React, { useState } from "react";
import ActivityItem from "../ActivityItem/ActivityItem";
import { Typography, Popconfirm, message } from "antd";

const { Text } = Typography;

export default function FavoriteList() {
  const tags = [1, 2, 3, 4];
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  return (
    <>
      <div className="fav-list-title">
        <h1>Your Favorite List</h1>
        <div>
          {" "}
          <Popconfirm
            title="Are you sure to delete all favorite list? This cannot be undone"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete All favorite</a>
          </Popconfirm>
          &nbsp;
        </div>
      </div>
      <div className="fav-list">
        <ActivityItem name="hiking" tags={tags}/>
        <ActivityItem name="hiking" tags={tags} />
        <ActivityItem name="hiking" tags={tags} />
        <ActivityItem name="hiking" tags={tags} />
      </div>
    </>
  );
}
