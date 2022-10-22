import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Space } from "antd";
import "antd/dist/antd.css";
import "./BreastCheck.css";

import BCStep1 from "./BCStep1";
import BCStep2 from "./BCStep2";
import BCStep3 from "./BCStep3";
import BCResources from "./BreastCheckResources";
import BCDate from "./BCDate";
import BCFinish from "./BCFinish";

function BreastCheck() {
  const { Panel } = Collapse;

  return (
    <div className="BreastCheck">
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <BCDate />
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="Step 1: Visual Inspection"
            key="1"
            className="site-collapse-custom-panel"
          >
            <BCStep1 />
          </Panel>
          <Panel
            header="Step 2: Physical Breast Inspection"
            key="2"
            className="site-collapse-custom-panel"
          >
            <BCStep2 />
          </Panel>
          <Panel
            header="Step 3: Check Around Breast"
            key="3"
            className="site-collapse-custom-panel"
          >
            <BCStep3 />
          </Panel>
          <Panel
            header="Further Instruction Resources"
            key="4"
            className="site-collapse-custom-panel"
          >
            <BCResources />
          </Panel>
        </Collapse>
        <BCFinish />
      </Space>
    </div>
  );
}

export default BreastCheck;
