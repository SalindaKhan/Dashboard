import React from "react";
import { Radar } from "@reactchartjs/react-chart.js";
import { Col, Row } from "react-bootstrap";

const data = {
  labels: ["", "", "", ""],
  datasets: [
    {
      data: [10, 6, 2, 6],
      borderColor: "#13EECC",
      borderWidth: 2,
      display: false,
    },
  ],
};
const options = {
  legend: {
    display: false,
    borderRadius: 50,
  },
  scale: {
    ticks: { beginAtZero: true },
  },
};

const Satisfaction = () => (
  <Row>
    <Col lg={10} style={{ padding: 10, right: 140, top: 0 }}>
      <h1
        style={{
          textAlign: "left",
          fontSize: "25px",
          marginLeft: 150,
          padding: 5,
        }}
      >
        ความพึงพอใจ
      </h1>
      <div>
        <Radar data={data} options={options} />
      </div>
    </Col>

    <Col lg={2} style={{ right: 260, bottom: -130 }}>
      <div style={{ width: 330, right: 150 }}>
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: 20,
            marginBottom: -12,
            backgroundColor: "#13EECC",
            border: "#13EECC",
          }}
        ></div>
        <h1
          style={{
            textAlign: "left",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 1,
            padding: 2,
          }}
        >
          {" "}
          สถานที่จัดการแข่งขันและที่พัก{" "}
        </h1>

        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: 10,
            marginBottom: -12,
            backgroundColor: "#2B88FD",
            border: "#2B88FD",
          }}
        ></div>
        <h1
          style={{
            textAlign: "left",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 1,
            padding: 2,
          }}
        >
          {" "}
          การเดินทางเข้ามาในการแข่งขัน{" "}
        </h1>

        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: 10,
            marginBottom: -12,
            backgroundColor: "#F2E630",
            border: "#F2E630",
          }}
        ></div>
        <h1
          style={{
            textAlign: "left",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 1,
            padding: 2,
          }}
        >
          {" "}
          โดยรวมของผู้จัดการแข่งขัน{" "}
        </h1>

        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: 10,
            marginBottom: -12,
            backgroundColor: "#F205CB",
            border: "#F205CB",
          }}
        ></div>
        <h1
          style={{
            textAlign: "left",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 1,
            padding: 2,
          }}
        >
          {" "}
          ด้านการประชาสัมพันธ์ก่อนการจัดการแข่งขันและการให้ข้อมูลที่เป็นประโยชน์ระหว่างการแข่งขัน
        </h1>
      </div>
    </Col>
  </Row>
);

export default Satisfaction;
