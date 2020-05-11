import React, { useState, useContext } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";

import "./GetStarted.scss"

const GetStarted = () => {

  const {userMail, dispatchUserMail} = useContext(Context);
  const {dispatchRequestTrial} = useContext(Context);

  return (
    <div className="get-started">
      <Container fluid className="position-relative z-1">
        <div className="awards-bg effect-bg"></div>
        <Row>
          <Col>
            <Container className="p-ef">
              <div className="shape-dots-small"></div>
              <Row>
                <Col lg={6} className="text-center text-lg-left">
                  <h2 className="text-light lh-1 mb-3">{settings.getstarted.title}</h2>
                  <p className="text-light op-07 mw-340 mb-4 mb-lg-0 mx-auto mx-lg-0">{settings.getstarted.description}</p>
                </Col>
                <Col lg={6} className="d-flex align-items-center justify-content-left justify-content-md-end">
                  <Form className="d-inline-flex w-480">
                    <div className="w-100 d-flex flex-column flex-md-row">
                      <Form.Control className="theme-light mb-4 mb-md-0" type="email" value={userMail} onChange={e => dispatchUserMail({type: "SET_USER_MAIL", data:e.target.value})} placeholder="Email adress" required />
                      <Button variant="light" onClick={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:true})}>{settings.getstarted.link.name}</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetStarted;