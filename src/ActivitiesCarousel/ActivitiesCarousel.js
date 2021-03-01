import React from 'react';
import { Carousel, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './ActivitiesCarousel.css';

export default function ActivitiesCarousel({ actPicArray, carWidth }) {
  const bodyStyles = document.body.style;
  bodyStyles.setProperty('--width', carWidth);
  return (
    <div className="carousel-act">
      <Carousel
        arrows
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
      >
        {actPicArray.map((pic, index) => (
          <div className="carousel-item" key={index}>
            <Image src={pic} className = "img-blur" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}