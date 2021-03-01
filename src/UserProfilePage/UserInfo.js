import React, { useState } from "react";
import "./UserInfo.css";
import { Typography } from "antd";
import UploadPhoto from "./UploadPhoto";

const { Title } = Typography;

function UserInfoComponent({ userInfo }) {
  const [editableStr, setEditableStr] = useState(userInfo.name);
  return (
    <div className="flex">
      <UploadPhoto />
        <Title
        level={4}
          className="name-edit"
          editable={{ onChange: setEditableStr }}
        >
          {editableStr}
        </Title>
    </div>
  );
}

export default UserInfoComponent;
