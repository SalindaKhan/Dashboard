import React from 'react';
import "./App.css";
import { Layout, Row, Col, Image, Menu, Dropdown, Button } from 'antd';
import { CaretDownFilled } from "@ant-design/icons";
import Career from "./Dashboard/career"
import Chiang from './Dashboard/ChiangMai';
import Sportman from './Dashboard/sportman';
import Continent from './Dashboard/Continent';
import Region from './Dashboard/Region';
import Category from './Dashboard/Category';
import Sex from './Dashboard/sex';
import Value from './Dashboard/value';
import Satisfaction from './Dashboard/Satisfaction';
import Dropdowns from './Dashboard/Dropdown';



const style = { background: 'white', padding: '4px ' };

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

function App() {
  return (
    <Layout className="font">
      <Row style={style} >
        <Col lg={12}>
          <Image
              width={236}
              height={78.8}
              src="./Sat.png" 
              />
          <Image
              width={77}
              height={77}
              src="./ดอยอินทนนท์.png" 
              />
        </Col>
        <Col lg={12}>
         <Dropdowns/>
        </Col>

      </Row>

      <Row style={{marginTop:16}}>
        <Col lg={18}>

          <Row style={{ padding: 8}}>
            <Col lg={24}>
              <Sportman/>
            </Col>
          </Row>

          <Row style={{gap:20, marginTop:8, padding: 8}}>
            <Col lg={11}style={{ background: "White"}}>
                <Value></Value>
            </Col>
            <Col lg={12}style={{ background: "white"}}>
                <Category/>
            </Col>
          </Row>

          <Row style={{gap:20, padding: 8}}>
            <Col lg={11}style={{ background: "White"}}>
              <Satisfaction/>
            </Col>
            <Col lg={12}>
              <Row style={{ gap:15}}>
                <Col lg={7} style={{background:"white"}}>
                  <Chiang></Chiang>
                </Col>
                <Col lg={7} style={{background:"white"}}>
                <div style={{background:"white", height:"100"}}>
                  <Region/>
                  </div>
                </Col>
                <Col lg={8} >
                  <div style={{background:"white", height:"200px"}}>
                  <Continent/>
                  </div>
                </Col>
              </Row>
          </Col>
            
          </Row>
          
        </Col>


        <Col lg={6} style={{ padding: 8}}>
              <Career/>
        </Col>
      </Row>
    </Layout>
    
  );

  }
  

export default App;