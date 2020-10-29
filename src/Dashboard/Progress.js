import React from "react";
import { Row, Col } from "antd";
import { Progress } from "antd";
function ProgressBar({ job, percent, color }) {
  return (
    <>
      <Row>
        <Col className="col-job">
          <div className="text-title">{job}</div>
        </Col>
        <Col className="col-job">
          <div className="text-percent">{percent}%</div>
        </Col>
        <Progress percent={percent} showInfo={false} strokeColor={color} />
      </Row>
    </>
  );
}

export default ProgressBar;