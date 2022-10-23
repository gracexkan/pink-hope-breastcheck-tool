import React, { useState } from "react";
<<<<<<< HEAD
import { Popover } from "antd";
import Button from "@mui/material/Button";
import BCResult from "./BCResult";
=======
import Button from "@mui/material/Button";
import BCSuccess from "./BCSuccess";
>>>>>>> 01e1b7952f12acab4756ae985ca3470e13a5d7f7

function BCFinish() {
  const buttonStyle = {
    backgroundColor: "#73313b",
    color: "#fff",
  };
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
=======
  const [isSuccess, setIsSuccess] = useState(false);
  const showSuccess = (e) => {
    setIsSuccess((show) => !show);
>>>>>>> 01e1b7952f12acab4756ae985ca3470e13a5d7f7
  };

  return (
    <div>
<<<<<<< HEAD
      <Popover
        content={<BCResult onClick={hide} />}
        // title="Title"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button variant="contained" style={buttonStyle}>
          Finish Self Check
        </Button>
      </Popover>
=======
      <Button variant="contained" style={buttonStyle} onClick={showSuccess}>
        {"Finish"}
        show BCSuccess{" "}
      </Button>
      <BCSuccess onClose={showSuccess} show={isSuccess} />
>>>>>>> 01e1b7952f12acab4756ae985ca3470e13a5d7f7
    </div>
  );
}

export default BCFinish;
