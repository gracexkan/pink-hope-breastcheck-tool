import React from "react";
import { Result } from "antd";

function BCResult({ onClick }) {
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
