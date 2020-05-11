import React, { useState } from "react";
import { Container, Row, Col, Fade } from "react-bootstrap";
import { Link } from "@reach/router";
import Icon from "../../../components/icon";
import ReactJson from 'react-json-view';
import Scrollbar from 'react-smooth-scrollbar';

import "./Parses.scss"

const Parses = ({ isVisible, page }) => {

  const [collapses, setCollapses] = useState(page.items.map((e, i) => (i == 0 ? true : false)));
  const json =
  {
    "entity_sentiment": "Float, Sentiment associated with the entity",
    "event_sentiment": "Float, Sentiment for event in a document",
    "doc_sentiment": "Float, Average sentiment of all entities and events in document.",
    "signal_sentiment": "Float, Average sentiment of entity event pair"
  }


  const setActive = (i) => {
    const c = [];

    collapses.forEach((elm, z) => {
      i == z ? c.push(true) : c.push(false);
    })

    setCollapses(c);

    console.log(collapses)

  }

  return (
    <div className={`parser ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {page.isShape && <div className="shape-dots-medium"></div>}
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 className={`${page.titleCL ? page.titleCL : "mw-550"}`}>{page.title}</h2>}
            {page.description && <p className="mt-4 mb-0 mw-540  text-medium">{page.description}</p>}
          </Col>
        </Row>
        <Row className="mt-d2 align-items-stretch">
          <Col lg={4}>
            <div className="parser-sidebar">
              {page.items.map((item, i) => (
                <div key={`ps-${i}`} onClick={() => setActive(i)} className={`parser-sidebar-item ${collapses[i] ? "active" : ""}`}>
                  <div className="parser-sidebar-item-content">
                    <div><h4 className="text-medium">{item.name}</h4></div>
                    <div><span className="text-primary">{item.tag}</span><span> - {item.value} {item.label}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={8}>
            <div className="parser-content">
              {page.items.map((item, i) => (
                <Fade in={collapses[i]} key={`pc-${i}`}>
                  <div className="parser-content-inner">
                    <div><h4 className="mb-4">{item.details.title}</h4></div>
                    <div><p className="mw-540 mb-d">{item.details.description}</p></div>
                    <Scrollbar>
                      <div className="parser-content-code">
                        <ReactJson src={json} enableClipboard={false} displayObjectSize={false} displayDataTypes={false} />
                      </div>
                    </Scrollbar>
                    <div>
                      {item.details.link ? <Link className="link-arrow" to={item.details.link.link}>{item.details.link.name ? item.details.link.name : "Learn More"} <Icon className="ml-2" variant="arrow-right" /></Link> : <></>}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Parses;