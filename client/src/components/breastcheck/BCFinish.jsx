import React, { useState } from "react";
import { Popover } from "antd";
import Button from "@mui/material/Button";
import BCResult from "./BCResult";
import { useEffect } from "react";
import axios from "axios";
function BCFinish({ decision }) {
  console.log(decision);
  const buttonStyle = {
    backgroundColor: "#73313b",
    color: "#fff",
  };
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    console.log("object");
    async function fetchData() {
      axios
        .post("/api/user/checkup", decision)
        .then((res) => console.log(res.data));
    }
    fetchData();
    console.log(newOpen);
    setOpen(newOpen);
  };
  useEffect(() => {
    console.log("open: " + open);
  }, [open]);
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
