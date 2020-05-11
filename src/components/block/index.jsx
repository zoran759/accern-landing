import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import Icon from "../../components/icon";

import "./Block.scss"

const Block = ({ data, className }) => {

  return (
    <div className={`mudule-block sect-spacer ${className}`}>
      <Container>
        <Row className="flex-column-reverse flex-md-row">
          <Col md={7} lg={6} className="d-flex align-items-center">
            <div>
              <div className="text-label"><span>{data.label}</span></div>
              <h2 className={`${data.titleCL ? data.titleCL : "mw-440"} mb-d`}>{data.title}</h2>
              <p className="mb-5 mw-540  text-medium">{data.description}</p>
              {data.link ? <Link className="link-arrow" to={data.link.link}>{data.link.name ? data.link.name : "Learn More"} <Icon className="ml-2" variant="arrow-right" /></Link> : <></>}
            </div>
          </Col>
          <Col md={5} lg={6} className="d-flex align-items-center">
            <div className="preset-illustration mb-5 mb-md-0">
              <img src={`../../assets/img/${data.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Block;