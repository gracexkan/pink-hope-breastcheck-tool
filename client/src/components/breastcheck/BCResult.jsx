import React from "react";
import { Result } from "antd";
import Button from "@mui/material/Button";

function BCResult({ onClick }) {
  const buttonStyle = {
    backgroundColor: "#f8dbd2",
    color: "#fff",
  };
  return (
    <Result
      status="success"
      title="Your Self Breast Check Has Been Recorded!"
      subTitle="Results:"
      extra={[<a className="close" onClick={onClick} />]}
    />
  );
}

export default BCResult;
