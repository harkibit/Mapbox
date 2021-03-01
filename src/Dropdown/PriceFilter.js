import React from 'react'
import "./Dropdown.css"
import { Menu, Dropdown, Button } from 'antd';

export default function PriceFilter({data}) {
  let value ;
    const handleClick = (e) => {
        // 
        // setElementChecked(value);
        // activitiesArray.forEach((act) => {
        //   if (act[elem] == value) {
        //     handleSelect(act);
        //   }
        // });
        console.log(e.item.props.value)

        data.filter(item => {
          switch(e.item.props.value){
            case "All" : 
              
            case "Free" :
              return item.price = "FREE"
              break;
            case "Less Than 15$" :
              item.price <= 15 ? value = item : value = " "
              return value
              break;
            case "Between 15-30 $": 
              return item.price >= 15 && item.price <= 30
              break;
            default : 
              return item.price
          }
        })
      };

    const menu = (
        <Menu className="itemsContainer">
          <Menu.Item
              className="items"
              value = "All"
              onClick={(element) => handleClick(element)}
            >All</Menu.Item>
            <Menu.Item
              className="items"
              value = "Free"
              onClick={(element) => handleClick(element)}
            >
              Free
            </Menu.Item>
            <Menu.Item
              className="items"
              value = "Less Than 15$"
              onClick={(element) => handleClick(element)}
            >
              Less Than 15$
            </Menu.Item>
            <Menu.Item
              className="items"
              value = "Between 15-30 $"
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
