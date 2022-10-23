import React from "react";
import CalTracker from "./CalTracker";
import { Typography } from "antd";

export default function Form() {
  const { Title } = Typography;
  const [formData, setFormData] = React.useState({
    logger: "period",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        margin: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "Verdana",
          fontSize: "30px",
          color: "#73313b",
          fontWeight: "bold",
        }}
      >
        Calendar Tracker
      </h1>
      <form style={{ width: "100%", paddingBottom: "30px" }}>
        <fieldset>
          <Title level={4}>Select Tracker</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "block",
                textAlign: "left",
                alignContent: "center",
              }}
            >
              <input
                type="radio"
                id="period"
                name="logger"
                value="period"
                checked={formData.logger === "period"}
                onChange={handleChange}
              />
              <label htmlFor="period"> Period Tracker</label>
              <br />

              <input
                type="radio"
                id="self-check"
                name="logger"
                value="self-check"
                checked={formData.logger === "self-check"}
                onChange={handleChange}
              />
              <label htmlFor="self-check"> Self-Check Tracker</label>
            </div>
          </div>

          <br />
        </fieldset>
      </form>
      <CalTracker isPeriodLogs={formData.logger === "period"} />
    </div>
  );
}
