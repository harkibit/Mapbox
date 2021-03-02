import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Dropdown.css';


export default function DropdownButton({
  elementArray,
  handleSelect,
  dropdownTitle,
}) {
  // const [elementChecked, setElementChecked] = useState(dropdownTitle);

  const handleClick = (element) => {
    let value = element.item.props.value;
    // setElementChecked(value);
    handleSelect(value);
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
        <Button className="dropButton" shape="round">
          {dropdownTitle} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
