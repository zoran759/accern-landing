import React, { useState, useContext } from "react";
import { Link, navigate } from "@reach/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Typed from "react-typed";
import { Context } from "../../../context/context";

import "./Hero.scss"

const Hero = ({ isVisible, page }) => {

  const [email, setEmail] = useState("");
  const {dispatchRequestTrial} = useContext(Context);

  return (
    <div className={`hero sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="">
              <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="shape-homehero"><img src="../../assets/img/dots-medium-2.svg" alt="" /></div>
                <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>
                {!page.strings && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                {page.strings &&
                  <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`}>
                    {page.title}
                    <span className="font-weight-medium">
                      <Typed
                        strings={page.strings}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        showCursor={page.strings.length > 1 ? true : false}
                        className="text-center text-md-left"
                        loop={page.strings.length > 1 ? true : false}
                      />
                    </span>
                  </h1>
                }
                {page.description &&
                  <p className="text-medium mw-550 mb-4 mb-lg-5 text-center text-md-left">{page.description}</p>
                }
                {page.isForm &&
                  <>
                    <Form className="form-base d-inline-flex w-480 mb-4">
                      <Form.Group className="w-100 d-flex flex-column flex-md-row">
                        <Form.Control type="email" className="input-shadow mb-4 mb-md-0" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required />
                        <Button variant="primary" type="submit" onClick={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:true})}>Free Trial</Button>
                      </Form.Group>
                    </Form>
                    <div className="text-center text-md-left mt-2 mt-md-0"><span className="text-gray-medium">Already a customer? <Link to="/">Sign In</Link></span></div>
                  </>
                }
                {page.button &&
                  <div className="text-center text-md-left"><Button onClick={() => page.button.link ? navigate(page.button.link) : dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:true})} variant="outline-primary">{page.button.name}</Button></div>
                }
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="preset-img-5">
              <img src={`../../assets/img/${page.img}`} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;