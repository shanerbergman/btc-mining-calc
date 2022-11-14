import React from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

const Main = () => {
  return (
    <>
      <Row>
        <Col span={24}>24 COL</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col xs={2} sm={4} md={4} lg={4} xl={4} style={{ border: "solid 1px" }}>
          Col
        </Col>
        <Col
          xs={20}
          sm={16}
          md={12}
          lg={12}
          xl={12}
          style={{ border: "solid 1px" }}
        >
          Col
        </Col>
        <Col xs={2} sm={4} md={8} lg={8} xl={8} style={{ border: "solid 1px" }}>
          Col
        </Col>
      </Row>
    </>
  );
};

export default Main;
