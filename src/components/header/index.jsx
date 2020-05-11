import React, { useContext, useEffect, useState } from "react";
import { Link } from "@reach/router";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../data/settings";
import { Context } from "../../context/context";
import Icon from "../icon";

import "./Header.scss"

const Header = ({scroll}) => {

  const [direction, setDirection] = useState("down");
  const [lastPos, setLastPos] = useState(scroll);
  const [subActive, setSubActive] = useState(false);
  const [subs, setSubs] = useState(settings.navigation.map(() => false));
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const {dispatchRequestTrial} = useContext(Context);

  useEffect(() => {
    if (lastPos > scroll) {
      setDirection("up");
      setSubActive(false);

    } else {
      setDirection("down");
      setSubActive(false);
    }

    if (scroll < 500) setDirection("");

    setLastPos(scroll);
  }, [scroll]);

  const renderSubLink = (link) => {
    return (link.link ? <Link onClick={hideAll} className={`nav-sub-link ${link.icon ? "with-icon" : ""}`} to={link.link}>
      {link.icon && <div><img src={`../../assets/img/${link.icon}`} alt="" /></div>}
      <div><h4 className="text-medium-link">{link.name}</h4><p className="mb-0 mw-200">{link.description}</p></div>
      {link.isSimple ? <Icon variant="arrow-right" /> : null}
    </Link>
      : <div className={`nav-sub-link cursor-pointer ${link.icon ? "with-icon" : ""}`}>
        {link.icon && <div><img src={`../../assets/img/${link.icon}`} alt="" /></div>}
        <div><h4 className="text-medium-link">{link.name}</h4><p className="mb-0 mw-200">{link.description}</p></div>
        {link.isSimple ? <Icon variant="arrow-right" /> : null}
      </div>)
  }

  const renderSub = (sub, i) => {
    return (
      <div className={`nav-sub-mask ${subs[i] ? "active" : ""}`} onClick={handleClickSub}>
        <div className="nav-sub">
          <Container>
            <Row>
              {sub.columns.map((column, i) => (
                <Col key={`nlk-${i}`} lg={column.size} className={`column-link-cont ${i != 0 ? "pl-5 pr-5" : "pr-0"} pb-5 ${column.className ? column.className : ""}`}>
                  <div className="column-link">
                    <div className="nav-label-padding mb-2 border-bottom"><span className="text-label">{column.label}</span></div>
                    <div className={`blocks margin-negative-1 ${column.size > 4 ? column.size < 12 ? "columns-2" : "columns-4" : "columns-1"}`}>
                      {column.links.map((link, i) => (
                        <div key={`s-${i}`} className={`block shadow-link ${link.isSimple ? "simple-link" : ""} ${link.isComing ? "coming-link" : ""}`}>
                          {renderSubLink(link)}
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    )
  }

  const handleClickSub = (e) => {
    if (!e.target.closest(".nav-sub")) hideAll();
  }

  const handleClickLink = (i) => {
    let temp = [];

    hideAll();

    subs.map((el, z) => {
      i == z ? temp.push(!subs[z]) : temp.push(false);
    })

    setSubs(temp);

  }

  const hideAll = () => {
    let temp = [];
    subs.map(() => temp.push(false))
    setSubs(temp);
  }

  return (
    <header className={`${scroll > 500 ? "hide" : ""} ${scroll > 100 ? "bg-white" : ""} ${direction} ${subActive ? "sub-active" : ""}`}>
      <Container>
        <Row>
          <Col className="d-flex align-items-center" md={2} xs={2}>
            <Link className="nav-link p-0" to="/"><img className="nav-logo" src="../../assets/img/logo.svg" alt="" /></Link>
          </Col>
          <Col md={10} xs={10}>
            <div className={`menu-toggle x ${!isActiveMobile ? "collapsed" : ""}`} onClick={() => setIsActiveMobile(!isActiveMobile)}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <div className={`nav-collapse-mask ${isActiveMobile ? "active" : ""}`}>
              <div className="nav-collapse">
                <Container>
                  <Row>
                    <Col className="nav-collapse-inner">
                      <Nav activeKey="/">
                        {settings.navigation.map((nav, i) => (
                          !nav.excludeNav &&
                          <Nav.Item key={`nav-${i}`}>
                            {nav.link ? <Link onClick={hideAll} className="nav-link" to={nav.link}>{nav.name}</Link>
                              : <div className={`nav-link cursor-pointer ${subs[i] ? "sub-active" : ""}`} onClick={() => nav.sub ? handleClickLink(i) : null}>
                                {nav.name}{nav.sub && <Icon variant="chevron-down" />}
                              </div>}
                            {nav.sub && renderSub(nav.sub, i)}
                          </Nav.Item>
                        ))}
                      </Nav>
                      <Button className="ml-0 ml-lg-4 w-auto w-md-100" variant="primary" onClick={()=>dispatchRequestTrial({type:"SET_REQUEST_TRIAL", data:true})}>Free Trial</Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;