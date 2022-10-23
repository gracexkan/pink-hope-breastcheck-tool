import React from "react";
import { Typography, Space } from "antd";
import BCButton from "./BCButton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import CachedIcon from "@mui/icons-material/Cached";

function BCStep2() {
  const { Title } = Typography;
  const iconStyle = { color: "#73313b", fontSize: 32 };
  return (
    <div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <Title level={4}>Instructions</Title>
        <h2>1. Move in clockwise or anti-clockwise direction around breast</h2>
        <h2>2. Use pads of 3 fingers</h2>
        <h2>3. Press into breast with circular motion</h2>
        <h2>4. Apply various pressure levels - light, medium and firm</h2>
        <h2>5. Feel around the collarbone and underarm</h2>
        <Title level={4}>Record any lumps you feel below</Title>
        <div className="symptoms__container">
          <div>
            <BCButton icon={<RotateRightIcon style={iconStyle} />} />
            <h5>lumps in left breast</h5>
          </div>
          <div>
            <BCButton icon={<RotateLeftIcon style={iconStyle} />} />
            <h5>lumps in right breast</h5>
          </div>
          <div>
            <BCButton icon={<CachedIcon style={iconStyle} />} />
            <h5>lumps around breast</h5>
          </div>
        </div>
      </Space>
    </div>
  );
}

export default BCStep2;
