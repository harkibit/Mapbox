import React from 'react'
import "./Dropdown.css"
import { Menu, Dropdown, Button } from 'antd';

export default function PriceFilter() {
    const handleClick = (element) => {
        console.log(element.item.props.value);
        // let value = element.item.props.value;
        // setElementChecked(value);
        // activitiesArray.forEach((act) => {
        //   if (act[elem] == value) {
        //     handleSelect(act);
        //   }
        // });
      };

    const menu = (
        <Menu className="itemsContainer">
            <Menu.Item
              className="items"
              onClick={(element) => handleClick(element)}
            >
              Free
            </Menu.Item>
            <Menu.Item
              className="items"
              onClick={(element) => handleClick(element)}
            >
              Less Than 15$
            </Menu.Item>
            <Menu.Item
              className="items"
              onClick={(element) => handleClick(element)}
            >
              Between 15-30 $
            </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <Dropdown overlay={menu}>
                <Button className="dropButton">
                    Prices 
                </Button>
            </Dropdown>
        </div>
    )
}
