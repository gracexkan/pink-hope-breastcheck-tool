import React, { useState } from "react";
import { Popover } from "antd";
import Button from "@mui/material/Button";
import BCResult from "./BCResult";

function BCFinish() {
  const buttonStyle = {
    backgroundColor: "#73313b",
    color: "#fff",
  };
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div>
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
    </div>
  );
}

export default BCFinish;
