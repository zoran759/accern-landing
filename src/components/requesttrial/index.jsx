import React, {useContext} from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import FormComp from "../form";
import { settings } from "../../data/settings";
import Icon from "../icon";
import { Link } from "@reach/router";
import {Context} from "../../context/context";

import "./RequestTrial.scss"

const RequestTrial = ({  }) => {

  const {isRequestTrial, dispatchRequestTrial} = useContext(Context);

  return (
    <Modal className="modal-custom" show={isRequestTrial} onHide={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:false})} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
      <div className="modal-close" onClick={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:false})}><Icon variant="icon-close" /></div>
        <Container>
          <Row>
            <Col lg={7} className="modal-padding bg-white">
              <FormComp data={settings.requestTrial.form} />
            </Col>
            <Col lg={5} className="position-relative bg-primary d-flex align-items-end p-3 pt-5 pb-5 p-md-5">
              <div className="shape-blue"></div>
              <div className="z-1">
                <div className="text-label text-light"><span>{settings.requestTrial.label}</span></div>
                <h2 className="text-light mb-4">{settings.requestTrial.title}</h2>
                <p className="text-small mw-250 text-light op-07">{settings.requestTrial.description}</p>
                <div className="mt-request">
                  <div className="text-label text-light op-07 text-tiny mb-3">{settings.requestTrial.customers.label}</div>
                  <div className="d-flex flex-wrap">
                    {settings.requestTrial.customers.columns.map((customer, i) => (
                      customer.link ? <Link key={`rl-${i}`} className="mr-4 mb-2" to={customer.link}><img className={`icon-tiny ${customer.className ? customer.className : ""}`} src={`../../assets/img/${customer.icon}`} alt="" /></Link> : <div key={`rl-${i}`} className="mr-4 mb-2"><img className={`icon-tiny ${customer.className ? customer.className : ""}`} src={`../../assets/img/${customer.icon}`} alt="" /></div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default RequestTrial;