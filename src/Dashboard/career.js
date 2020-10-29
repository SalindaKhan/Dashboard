import React from "react";
import { Row, Col, Card } from "antd";
import ProgressBar from "./Progress";
import Chartgender from "./ChartGender";

function Career () {
  return (
    <Row>
      <Col xs={24} className="ant-card" style={{ padding:20, background: "white"}}>
          <div className="text-toppic">อาชีพ</div>
          <ProgressBar
            job="รัฐบาล/รัฐวิสาหกิจ"
            percent={45}
            color={"#13EECC"}
          ></ProgressBar>
          <ProgressBar
            job="เจ้าของธุรกิจ/ธุรกิจส่วนตัว"
            percent={54}
            color={"#3B88FD"}
          ></ProgressBar>
          <ProgressBar
            job="นักเรียน/นักศึกษา"
            percent={45}
            color={"#0B5096"}
          ></ProgressBar>
          <ProgressBar
            job="พนักงานบริษัท"
            percent={30}
            color={"#F205CB"}
          ></ProgressBar>
          <ProgressBar
            job="นักกีฬาอาชีพ"
            percent={20}
            color={"#F2E635"}
          ></ProgressBar>
          <ProgressBar
            job="อื่นๆ ระบุ"
            percent={18}
            color={"#6204BF"}
          ></ProgressBar>
      </Col>
      <Col span={24}  className="ant-card" style={{ background: "white", marginTop:15}}>
            <Col >
                <h1 style={{font: "Sukhumvit Set" , color: "#171717", marginLeft: 20 }}>เพศและช่วงอายุ</h1>
            
              <Row>
                <div
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 20,
                    backgroundColor: "#3B88FD",
                    border: 0,
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: 18,
                      marginLeft: 20,
                    }}
                  >
                    ชาย
                  </h1>
                </div>

                <div
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 20,
                    backgroundColor: "#13EECC",
                    border: 0,
                    marginLeft: 45,
                    marginTop: 10,
                  }}
                >
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: 18,
                      marginLeft: 20,
                    }}
                  >
                    หญิง
                  </h1>
                </div>
              </Row>
              
            </Col>
      

            
          <Chartgender className="card-chart"></Chartgender>
      </Col>
    </Row>
  );
}

export default Career;
