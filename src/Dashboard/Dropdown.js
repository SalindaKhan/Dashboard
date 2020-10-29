import React from "react";
import { Row } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { CaretDownFilled } from "@ant-design/icons";

const menu1 = (
  <Menu>
    <Menu.Item key="1">เลือกรายการที่ต้องการ</Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item key="1">เลือกปีที่ต้องการ</Menu.Item>
  </Menu>
);
function Dropdowns() {
  return (
    <Row style={{ font: "20px Sukhumvit Set", textAlign: "center" }}>
      <p style={{ padding: 20 }}>มหกรรม</p>
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown overlay={menu1}>
          <Button
            style={{
              paddingLeft: "10px",
              width: 400,
              height: 62,
              fontSize: 20,
            }}
          >
            Thailand ดอยอินทนนท์
            <CaretDownFilled />
          </Button>
        </Dropdown>
      </div>
      <p style={{ padding: 20 }}>ปี</p>
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown overlay={menu2}>
          <Button
            style={{
              paddingLeft: "10px",
              width: 150,
              height: 62,
              fontSize: 20,
            }}
          >
            2020 <CaretDownFilled />
          </Button>
        </Dropdown>
      </div>
    </Row>
  );
}

export default Dropdowns;
