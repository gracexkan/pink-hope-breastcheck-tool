import React, { useState } from "react";
import Button from "@mui/material/Button";
import BCSuccess from "./BCSuccess";

function BCFinish() {
  const buttonStyle = {
    backgroundColor: "#73313b",
    color: "#fff",
  };
  const [isSuccess, setIsSuccess] = useState(false);
  const showSuccess = (e) => {
    setIsSuccess((show) => !show);
  };

  return (
    <div>
      <Button variant="contained" style={buttonStyle} onClick={showSuccess}>
        {"Finish"}
        show BCSuccess{" "}
      </Button>
      <BCSuccess onClose={showSuccess} show={isSuccess} />
    </div>
  );
}

export default BCFinish;
