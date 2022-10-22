import React from "react";

import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import BCButton from "./BCButton";

function BCStep1() {
  const iconStyle = { color: "#73313b", fontSize: 32 };
  return (
    <div>
      <div className="symptoms__container">
        <div>
          <BCButton icon={<OpenInFullOutlinedIcon style={iconStyle} />} />
          <h5>changes in shape and size</h5>
        </div>
        <div>
          <BCButton icon={<BlurCircularOutlinedIcon style={iconStyle} />} />
          <h5>puckering of skin or nipple</h5>
        </div>
        <div>
          <BCButton
            icon={<SupervisedUserCircleOutlinedIcon style={iconStyle} />}
          />
          <h5>rash around nipple</h5>
        </div>
        <div>
          <BCButton icon={<OpacityRoundedIcon style={iconStyle} />} />
          <h5>nipple dischange</h5>
        </div>
        <div>
          <BCButton icon={<BloodtypeOutlinedIcon style={iconStyle} />} />
          <h5>nipple bleeding</h5>
        </div>
        <div>
          <BCButton icon={<LocalPharmacyOutlinedIcon style={iconStyle} />} />
          <h5>skin redness</h5>
        </div>
        <div>
          <BCButton
            icon={<SentimentDissatisfiedOutlinedIcon style={iconStyle} />}
          />
          <h5>skin soreness</h5>
        </div>
        <div>
          <BCButton icon={<FilterListOutlinedIcon style={iconStyle} />} />
          <h5>accentuated veins</h5>
        </div>
        <div>
          <BCButton icon={<EmojiPeopleOutlinedIcon style={iconStyle} />} />
          <h5>upper arm swelling</h5>
        </div>
      </div>
    </div>
  );
}

export default BCStep1;
