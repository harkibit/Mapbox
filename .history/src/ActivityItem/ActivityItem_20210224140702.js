import React, { useState } from "react";
import "./activityItem.css";
import { Card, Row, Col, Typography, Rate, Tooltip, Badge } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  DoubleRightOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

export default function ActivitiesItem(props) {
  const { key, imgsrc, name, cityName, rating, price, tags, handleMapTooltip } = props;

  const [hover, setHover] = useState(false);
  // const handleMapTooltip = () => {
  //   console.log(key, hover);
  //   setHover(!hover);
  // };
  const handleMouseLeave = () => {
    setHover(!hover);
  };
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <Card
      className="cardSize"
      hoverable
      key={key}
      onMouseOver={handleMapTooltip}
      onMouseLeave={handleMouseLeave}
    >
      <Row>
        <Col span={9}>
          <img className="image" src={imgsrc} width={210} height={150} />
        </Col>

        <Col span={15}>
          <Row>
            <Col span={21}>
              <Title level={3}>{name}</Title>
            </Col>
            <Col span={3}>
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
            </Col>
          </Row>

          <Row className="middle-row-height">
            <Col span={19} className = "cityName">
              {cityName}
              <br />
              <Rate disabled allowHalf defaultValue={rating} />
            </Col>
            <Col span={5}>
              <Title level={3}>{price}</Title>
            </Col>
          </Row>

          <hr style={{ borderTop: "lightgray" }} />

          <Row justify="space-between">
            {tags.length < 4
              ? tags.map((tag) => <span className = "tagsFontColor">{tag}</span>)
              : tags.slice(0, 3).map((tag) => <span className = "tagsFontColor">{tag}</span>)}

            {tags.length > 3 && (
              <Badge
                overflowCount={10}
                style={{ backgroundColor: "#108ee9" }}
                count={tags.length - 3}
              />
            )}
            <span className = "learnMore">
              learn more <DoubleRightOutlined />
            </span>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
