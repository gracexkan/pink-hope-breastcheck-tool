import React from "react";
import { DatePicker, Typography } from "antd";

function BCDate() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const { Title } = Typography;

  return (
    <div>
      <Title level={4}>Select Date</Title>
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default BCDate;
