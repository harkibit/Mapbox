import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Dropdown.css';
export default function DropdownButton({
  elementArray,
  activitiesArray,
  handleSelect,
  elem,
  dropdownTitle,
}) {
  const [elementChecked, setElementChecked] = useState(dropdownTitle);
  const handleClick = (element) => {
    console.log(element.item.props.value);
    let value = element.item.props.value;
    setElementChecked(value);
    activitiesArray.forEach((act) => {
      if (act[elem] == value) {
        handleSelect(act);
      }
    });
  };
  const menu = (
    <Menu className="itemsContainer">
      {elementArray.map((item, index) => (
        <Menu.Item
          className="items"
          value={item.name}
          key={index}
          onClick={(element) => handleClick(element)}
        >
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button className="dropButton">
          {elementChecked} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}