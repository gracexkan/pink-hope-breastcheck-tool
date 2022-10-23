import React from "react";
import CalTracker from "./CalTracker";

export default function Form() {
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
      }}
    >
      <h1>Calendar Tracker</h1>
      <form style={{ width: "100%", paddingBottom: "30px" }}>
        <fieldset>
          <legend>Select a tracker</legend>

          <input
            type="radio"
            id="period"
            name="logger"
            value="period"
            checked={formData.logger === "period"}
            onChange={handleChange}
          />
          <label htmlFor="period">Period Tracker</label>
          <br />

          <input
            type="radio"
            id="self-check"
            name="logger"
            value="self-check"
            checked={formData.logger === "self-check"}
            onChange={handleChange}
          />
          <label htmlFor="self-check">Self-Check Tracker</label>
          <br />
        </fieldset>
      </form>
      <CalTracker isPeriodLogs={formData.logger === "period"} />
    </div>
  );
}
