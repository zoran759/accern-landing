import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Typed from "react-typed";
import { page } from "../../../data/pages/homepage";
import { Context } from "../../../context/context";

import "./HomeHero.scss"

const HomeHero = ({ isVisible }) => {

  const [email, setEmail] = useState("");

  const {dispatchRequestTrial} = useContext(Context);
  const {userMail, dispatchUserMail} = useContext(Context);

  return (
    <div className={`home-hero sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="mt-n-50">
              <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="shape-homehero"><img src="../../assets/img/dots-medium-2.svg" alt="" /></div>
                <div className="mb-2 text-center text-md-left"><span className="text-label">{page.homehero.label}</span></div>
                <h1 className="mb-4 text-center text-md-left">{page.homehero.title} <div className="font-weight-medium">
                  <Typed
                    strings={page.homehero.strings}
                    typeSpeed={50}
                    backSpeed={30}
                    backDelay={2000}
                    showCursor
                    className="text-center text-md-left"
                    loop
                  />
                </div>
                </h1>
                <Form className="form-base d-inline-flex w-480 mb-4">
                  <div className="w-100 d-flex flex-column flex-md-row">
                    <Form.Control type="email" className="input-shadow mb-4 mb-md-0" value={userMail} onChange={e => dispatchUserMail({type: "SET_USER_MAIL", data:e.target.value})} placeholder="Email adress" required />
                    <Button variant="primary" onClick={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:true})}>Free Trial</Button>
                  </div>
                </Form>
                <div className="text-center text-md-left mt-2 mt-md-0"><span className="text-gray-medium">Already a customer? <Link to="/">Sign In</Link></span></div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="preset-img-1">
              <img src={`../../assets/img/${page.homehero.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeHero;