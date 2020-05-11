import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./SimpleCarousel.scss"

const SimpleCarousel = ({ page }) => {

  return (
    <div className={`simple-carousel ${page.className ? page.className : ""}`}>
      <Container>
        {page.label &&
          <Row>
            <Col>
              <div className="text-label mb-d"><span>{page.label}</span></div>
            </Col>
          </Row>
        }
        <Row>
          {page.columns.map((item, i) => (
            <Col key={`sb-${i}`} className="pb-g">
              {item.link ?
                <a href={item.link.link} className="simple-block">
                  {item.label && <div className="text-label"><span>{item.label}</span></div>}
                  {item.link.name && <div className="text-medium">{item.link.name}</div>}
                  {item.logo && <div className="d-flex h-100 align-items-center justify-content-center"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo}`} alt="" /></div>}
                  {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                  {item.description && <p className="mb-0 text-small">{item.description}</p>}

                </a> :
                <div className="simple-block">
                  {item.label && <div className="text-label"><span>{item.label}</span></div>}
                  {item.logo && <div className="d-flex h-100 align-items-center justify-content-center"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo}`} alt="" /></div>}
                  {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                  {item.description && <p className="mb-0 text-small">{item.description}</p>}
                </div>}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SimpleCarousel;