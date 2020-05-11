import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FormGroup from "../formgroup";
import { ApiService } from "../../services/ApiService";

import "./Form.scss";

const FormComp = ({ data }) => {

  const [isCompleted, setIsCompleted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
    setIsButtonDisabled(true);

    const data = new FormData(e.target);

    ApiService.post(data).then(result => {
      if (result.data = "success") {
        setIsCompleted(true);
      }
    }, error => {
      console.log(error)
    })

  }

  return (
    <div className={`form ${data.className ? data.className : ""}`}>
      {!isCompleted &&
        <>
          <div>
            <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
              <div className="shape-homehero z-1"><img src="../../assets/img/dots-medium-3.svg" alt="" /></div>
              {data.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{data.label}</span></div>}
              {data.title && <h1 className={`mb-4 text-center text-md-left ${data.titleCL ? data.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: data.title }}></h1>}
              {data.description &&
                <p className="text-medium mw-550 mb-4 mb-lg-5 text-center text-md-left">{data.description}</p>
              }
            </div>
          </div>
          <Form className="mt-5" onSubmit={onSubmit}>
            <Container fluid className="p-0">
              <Row>
                {data.fields.map((field, i) => (
                  <Col key={`ff-${i}`} md={field.type == "textarea" ? 12 : 6}>
                    <FormGroup className="mb-4 advanced" name={field.name} controlId={`form${field.name}`} as={field.type == "textarea" ? "textarea" : "input"} required={field.required ? true : false} type={field.type} placeholder={field.placeholder} />
                  </Col>
                ))}
                <Col>
                  <Button disabled={isButtonDisabled ? true : false} className="mt-4" variant="primary" type="submit">Submit</Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </>
      }
      <div className={`form-message ${isCompleted ? "active" : ""}`}>
        <h1>{data.message}</h1>
      </div>
    </div>
  );
}

export default FormComp;