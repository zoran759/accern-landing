import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./ThemedBlock.scss"

const ThemedBlock = ({ isVisible, page }) => {

  return (
    <div className={`data-partner ${isVisible ? "active" : ""}`}>
    <Container fluid className="position-relative z-1">
      <div className="awards-bg effect-bg"></div>
      <Row>
        <Col>
          <Container className="p-ef">
            <Row>
              <Col lg={6} className="text-center text-lg-left">
                <h2 className="text-light lh-1 mb-3">{page.title}</h2>
                <p className="text-light op-07 mw-340 mb-4 mb-lg-0 mx-auto mx-lg-0">{page.description}</p>
              </Col>
              <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-end">
                {page.button && <Button variant="light">{page.button.name}</Button>}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default ThemedBlock;