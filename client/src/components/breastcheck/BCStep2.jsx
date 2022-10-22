import React from "react";
import { Typography } from "antd";

function BCStep2() {
  const { Title } = Typography;
  return (
    <div>
      <Title level={4}>Instructions</Title>
      <h2>1. Move in clockwise or anti-clockwise direction around breast</h2>
      <h2>2. Use pads of 3 fingers</h2>
      <h2>3. Press into breast with circular motion</h2>
      <h2>4. Apply various pressure levels - light, medium and firm</h2>
      <h1>If you feel any lumps, record below</h1>
      <Title level={4}>If you feel any lumps, record below</Title>
    </div>
  );
}

export default BCStep2;
