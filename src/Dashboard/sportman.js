import React from "react";
import { Card, Row, Col,Image } from "react-bootstrap";


function Sportman() {
  const data = [
    { value1: "2461" },
    { value2: "2464" },
    {  value3: "2467" },
    {  value4: "2468" },
    {  value5: "2462" },
  ];
  const value1 = data.map((data, index) => (
    <span key={index} style={{ height: "50px" }}>
      {data.value1}
    </span>
  ));
  const value2 = data.map((data, index) => (
     <span key={index} style={{ height: "50px" }}>
       {data.value2}
     </span>
   ));
   const value3 = data.map((data, index) => (
     <span key={index} style={{ height: "50px" }}>
       {data.value3}
     </span>
   ));
   const value4 = data.map((data, index) => (
     <span key={index} style={{ height: "50px" }}>
       {data.value4}
     </span>
   ));
   const value5 = data.map((data, index) => (
     <span key={index} style={{ height: "50px" }}>
       {data.value5}
     </span>
   ));
  return (
     <Row>
          <Col>
               <Card style={{width:"262px",height:"122px",backgroundColor:"#ffffff"}}>
                    <Row >
                         <Col xs={7} data={data}  >
                              <div style={{fontSize:"18px",color:"#43425D", height: "30px",marginTop:"10px",paddingLeft:"10px" }}>
                                   นักกีฬาไทย
                              </div>
                              <div style={{fontSize:"28px",color:"#292766",textAlign:"left",paddingLeft:"10px"}}>
                                   {value1}
                              </div>
                         </Col>
                         <Col xs={5} style={{width:"82px",height:"82px",borderRadius:"250px",marginTop:"10px",paddingRight:"20px"}}>
                              <Image src='./Icon-graph.png' className="Icon" />
                         </Col>
                    </Row>
               </Card>
          </Col>
          <Col>
               <Card style={{width:"262px",height:"122px",backgroundColor:"#ffffff",border:"2px solid #C6C6C64D ",borderRadius:"10px"}}>
                    <Row >
                         <Col xs={7} data={data}  >
                              <div style={{fontSize:"18px",color:"#43425D", height: "30px",marginTop:"10px",paddingLeft:"10px" }}>
                                   นักกีฬาต่างชาติ
                              </div>
                              <div style={{fontSize:"28px",color:"#292766",textAlign:"left",paddingLeft:"10px"}}>
                                   {value2}
                              </div>
                         </Col>
                         <Col xs={5} style={{width:"38px",height:"17px",marginTop:"10px",paddingRight:"20px"}}>
                              <Image src='./Icon-graph.png' className="Icon" />
                         </Col>
                    </Row>
               </Card>
          </Col> 
          <Col>
               <Card style={{width:"262px",height:"122px",backgroundColor:"#ffffff",border:"2px solid #C6C6C64D ",borderRadius:"10px"}}>
                    <Row >
                         <Col xs={7} data={data}  >
                              <div style={{fontSize:"18px",color:"#43425D", height: "30px",marginTop:"10px",paddingLeft:"10px" }}>
                                   ผู้จัดการแข่งขัน
                              </div>
                              <div style={{fontSize:"28px",color:"#292766",textAlign:"left",paddingLeft:"10px"}}>
                                   {value3}
                              </div>
                         </Col>
                         <Col xs={5} style={{width:"38px",height:"17px",marginTop:"10px",paddingRight:"20px"}}>
                              <Image src='./Icon-graph.png' className="Icon" />
                         </Col>
                    </Row>
               </Card>
          </Col> 
          <Col>
               <Card style={{width:"262px",height:"122px",backgroundColor:"#ffffff",border:"2px solid #C6C6C64D ",borderRadius:"10px"}}>
                    <Row >
                         <Col xs={7} data={data}  >
                              <div style={{fontSize:"18px",color:"#43425D", height: "30px",marginTop:"10px",paddingLeft:"10px" }}>
                                   อาสาสมัคร
                              </div>
                              <div style={{fontSize:"28px",color:"#292766",textAlign:"left",paddingLeft:"10px"}}>
                                   {value4}
                              </div>
                         </Col>
                         <Col xs={5} style={{width:"38px",height:"17px",marginTop:"10px",paddingRight:"20px"}}>
                              <Image src='./Icon-graph.png' className="Icon" />
                         </Col>
                    </Row>
               </Card>
          </Col> 
          <Col>
               <Card style={{width:"262px",height:"122px",backgroundColor:"#ffffff",border:"2px solid #C6C6C64D ",borderRadius:"10px"}}>
                    <Row >
                         <Col xs={7} data={data}  >
                              <div style={{fontSize:"18px",color:"#43425D", height: "30px",marginTop:"10px",paddingLeft:"10px" }}>
                                   ผู้ติดตาม/ผู้ชม
                              </div>
                              <div style={{fontSize:"28px",color:"#292766",textAlign:"left",paddingLeft:"10px"}}>
                                   {value5}
                              </div>
                         </Col>
                         <Col xs={5} style={{width:"38px",height:"17px",marginTop:"10px",paddingRight:"20px"}}>
                              <Image src='./Icon-graph.png' className="Icon" />
                         </Col>
                    </Row>
               </Card>
          </Col>  
     </Row>



  );
}

export default Sportman;