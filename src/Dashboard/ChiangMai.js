import React from "react";
import { Progress, Card, Row, Col } from "antd";

const Chiang = () => {
     const num=[66.66]
     const number=[6,666]
  return (
     
        // <Row>
        //     <Col span={24}>
            <Card>
            <Row>
            <Progress 
                style={{color:"#13EECC",textAlign:'center',marginTop:"20px"}}
                type="circle" 
                percent={num}
                strokeColor={"#13EECC"}
                format={percent => `${number}`}
            />
            </Row>
            <Row style={{textAlign:"center",marginTop:"55px",marginRight:"10px"}}>
                <span style={{fontSize:"15px",color:"#292766",width:"94px",height:"17px"}}> 
                        จังหวัดเชียงใหม่
                </span>
            </Row>
        </Card>
        //     </Col>
        // </Row>
     
     
  );
};

export default Chiang;