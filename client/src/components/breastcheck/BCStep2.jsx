import React from "react";
import { Typography, Space } from "antd";
import BCButton from "./BCButton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import CachedIcon from "@mui/icons-material/Cached";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";

function BCStep2() {
  const { Title } = Typography;
  const iconStyle = { color: "#73313b", fontSize: 32 };

  const [lumpNo, setLumpNo] = React.useState("");
  const handleChange = (event) => {
    setLumpNo(event.target.value);
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#f8dbd2",
        boxShadow: "0 0 0 0.2rem #f8dbd2",
      },
    },
  }));

  return (
    <div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <div>
          <Title level={4}>Instructions</Title>
          <h2>
            1. Move in clockwise or anti-clockwise direction around breast
          </h2>
          <h2>2. Use pads of 3 fingers</h2>
          <h2>3. Press into breast with circular motion</h2>
          <h2>4. Apply various pressure levels - light, medium and firm</h2>
          <h2>5. Feel around the collarbone and underarm</h2>
        </div>

        <div>
          <Title level={4}>Record any lumps you feel below</Title>
          <div className="symptoms__container">
            <div>
              <BCButton icon={<RotateRightIcon style={iconStyle} />} />
              <h5>lumps in left breast</h5>
            </div>
            <div>
              <BCButton icon={<RotateLeftIcon style={iconStyle} />} />
              <h5>lumps in right breast</h5>
            </div>
            <div>
              <BCButton icon={<CachedIcon style={iconStyle} />} />
              <h5>lumps around breast</h5>
            </div>
          </div>
        </div>

        <div>
          <Title level={4}>Number of lumps</Title>
          <FormControl sx={{ m: 1 }} variant="standard">
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
        </div>

        <div>
          <Title level={4}>Size of lumps (diameter)</Title>
          <div className="symptoms__container">
            <div>
              <BCButton icon={<AdjustOutlinedIcon style={iconStyle} />} />
              <h5>small (0-1cm)</h5>
            </div>
            <div>
              <BCButton
                icon={<FiberManualRecordOutlinedIcon style={iconStyle} />}
              />
              <h5>medium (1-2cm)</h5>
            </div>
            <div>
              <BCButton icon={<Brightness1OutlinedIcon style={iconStyle} />} />
              <h5>large (2+ cm)</h5>
            </div>
          </div>
        </div>

        <div>
          <Title level={4}>How smooth does your breast feel?</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            style={{ color: "#73313b", maxWidth: "70%" }}
          />
        </div>

        <div>
          <Title level={4}>How symmetrical do your breasts look?</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            style={{ color: "#73313b", maxWidth: "70%" }}
          />
        </div>
      </Space>
    </div>
  );
}

export default BCStep2;
