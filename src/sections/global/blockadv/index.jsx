import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { page } from "../../../data/pages/homepage";
import { Link } from "@reach/router";
import Parralax from "../../../components/parallax";

import "./BlockAdv.scss"

const BlockAdv = ({ isVisible, page }) => {

  return (
    <div className={`block-adv ${isVisible ? "active" : ''}`}>
      <Parralax variant="primary"/>
      <Container>
        <Row>
          <Col lg={7}>
            <div className="block shadow mt-n-1 text-center text-md-left">
              {page.label && <div className="text-label"><span>{page.label}</span></div>}
              <h2 className={`mb-d ${page.titleCL ? page.titleCL : "mw-550"}`}>{page.title}</h2>
              {page.description && <p className="text-subtitle-adv pb-3 mw-lg-380">{page.description}</p>}
              {page.link ? <Link className="btn btn-primary" to={page.link}>Learn More</Link> : <></>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlockAdv;