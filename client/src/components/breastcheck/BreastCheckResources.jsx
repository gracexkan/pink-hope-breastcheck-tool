import React from "react";
import YouTube from "react-youtube";
import { Space, Typography } from "antd";
import Button from "@mui/material/Button";

function BCResources() {
  const { Title } = Typography;
  const buttonStyle = {
    backgroundColor: "#f8dbd2",
    color: "#73313b",
  };
  const vidStyle = {
    height: "10%",
  };

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
      }}
    >
      <Title level={4}>Breast Self Check Article</Title>
      <Button
        variant="contained"
        href="https://www.breastcancer.org/screening-testing/breast-self-exam-bse"
        style={buttonStyle}
      >
        Open Link
      </Button>

      <Title level={4}>Videos</Title>
      <YouTube videoId="LrfE6JUwIms" style={vidStyle} />
      <YouTube videoId="A2__iyax54k" />
      <YouTube videoId="sPfPb9rq1hw" />
    </Space>
  );
}

export default BCResources;
