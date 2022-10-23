import React from "react";
import { Result } from "antd";

function BCResult({ onClick, value }) {
  return (
    <Result
      status="success"
      title="Your Breast Self Check Has Been Recorded!"
      subTitle={
        ("Results: ",
        value
          ? " Please get checked with a professional!"
          : " We do not detect anything, however, if you are unsure, please seek professional help.")
      }
      extra={[<a className="close" onClick={onClick} />]}
    />
  );
}

export default BCResult;
