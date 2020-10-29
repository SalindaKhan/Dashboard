import React from 'react'
import Chartgender from "./ChartGender";
import { Row, Col, Card } from "antd";

const Sex = () => {
    return (
        <>
        <Row style={{padding:5}}>
            <Col >
                <h1 style={{font: "normal normal bold 20px/32px Sukhumvit Set" , color: "#171717", marginLeft: 20 }}>เพศและช่วงอายุ</h1>
            </Col>
          </Row>
          <Chartgender className="card-chart"></Chartgender>
          </>
    )
}
 export default Sex;