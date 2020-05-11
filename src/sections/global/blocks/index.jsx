import React, { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "@reach/router";

import "./Blocks.scss";

const getSocialIcon = (name) => {
  switch(name){
    case "linked":
      return <img src="../../assets/img/icon-linkedin.svg" alt=""/>
  }
}

const renderSocials = (socials) => {
  return <>
    <div className="block-socials">
      {socials.map((social)=>(
        social.link ? <a href={social.link} target="_blank">{getSocialIcon(social.type)}</a> : <div>{getSocialIcon(social.type)}</div>
      ))}
    </div>
  </>
}

const renderContent = (column, page) => {
  return <>
    <div className={`block-icon ${column.iconH ? "block-hover-icon" : ""}`}>
      {column.specialTitle && <div className="block-special-title">{column.specialTitle}</div>}
      <div className="block-icon-inner">{column.socials && renderSocials(column.socials)}<img className="block-icn icon-medium" src={`../../assets/img/${column.icon}`} alt="" /></div>
      {column.iconH && <img className="icon-medium" src={`../../assets/img/${column.iconH}`} alt="" />}
      {column.status == "offline" && <Badge variant="danger">{column.badge}</Badge>}
      {column.status == "online" && <Badge variant="success">{column.badge}</Badge>}
    </div>
    <div className="h-100 mt-d">
      <h4 className={`${column.label ? "mb-1" : ""} ${page.version == "team" ? "text-medium-strong" : ""} ${column.status == "online" ? "status-online" : ""} ${column.status == "offline" ? "status-offline" : ""}`}>{column.title}</h4>
      <p className={`mb-2 ${page.version == "team" ? "text-small-label" : "text-small mw-200"}`}>{column.description}</p>
      {column.label && <p className="mb-2 op-08">{column.label}</p>}
    </div>
  </>
}

const Blocks = ({ isVisible, page }) => {

  const [filter, setFilter] = useState(page.filterAll ? "all" : 0);

  return (
    <div className={`module-blocks ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {page.isShape && <div className="shape-dots-medium"></div>}
      <Container>
        <Row>
          <Col>
            {page.label && <div className="text-label"><span>{page.label}</span></div>}
            {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
            {page.description && <p className={`mt-4 ${page.type == "filter" ? "mb-5" : "mb-0"} mw-540  text-medium`}>{page.description}</p>}
          </Col>
        </Row>
        <Row className={`mt-0 ${page.isReducedMargin ? "mt-lg-0" : "mt-lg-4"}`}>
          <Col>
            {page.isGrouped ?
              page.type == "filter" ?
                <>
                  <Row className="block-filters">
                    {page.filterAll &&
                      <Col>
                        <div onClick={() => setFilter("all")} className={`block-filter ${filter == "all" ? "active" : ""}`}>
                          {page.filterAll}
                        </div>
                      </Col>
                    }

                    {page.groups.map((group, i) => (
                      <Col key={`fb-${i}`}>
                        <div onClick={() => setFilter(i)} className={`block-filter ${filter == i ? "active" : ""}`}>
                          {group.name}
                        </div>

                      </Col>
                    ))}
                  </Row>

                  <div className={`blocks ${page.version == "team" ? "team-blocks" : ""} ${page.isReducedMargin ? "mt-4" : "mt-5"} columns-5`}>

                    {filter == "all" ?
                      page.groups.map((group, i) => (
                        group.columns.map((column, i) => (
                          column.link ?
                            <Link key={`ic-${i}`} className={`block as-link shadow-adv`} to={column.link}>
                              {renderContent(column, page)}
                            </Link> :
                            <div key={`ic-${i}`} className={`block shadow-adv`}>
                              {renderContent(column, page)}
                            </div>
                        )))) :
                      page.groups[filter].columns.map((column, i) => (
                        column.link ?
                          <Link key={`ic-${i}`} className={`block as-link ${page.version == "team" ? "team-block" : "shadow-adv"}`} to={column.link}>
                            {renderContent(column, page)}
                          </Link> :
                          <div key={`ic-${i}`} className={`block ${page.version == "team" ? "team-block" : "shadow-adv"}`}>
                            {renderContent(column, page)}
                          </div>
                      ))
                    }
                  </div>
                </>
                :
                <div className="block-groups margin-negative-2">
                  {page.groups.map((group, i) => (
                    <div key={`bg-${i}`} className={`block-group columns-${group.columns.length < 5 ? group.columns.length : 5}`}>
                      <div className="block-group-name">{group.name}</div>
                      <div className={`blocks bloks-grouped columns-${group.columns.length < 5 ? group.columns.length : 5}`}>
                        {group.columns.map((column, i) => (
                          column.link ?
                            <Link key={`ic-${i}`} className={`block as-link shadow-adv`} to={column.link}>
                              {renderContent(column, page)}
                            </Link> :
                            <div key={`ic-${i}`} className={`block shadow-adv`}>
                              {renderContent(column, page)}
                            </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              :
              <div className={`blocks margin-negative-2 ${page.isReducedMargin ? "mt-4" : "mt-5"} columns-${page.columns.length < 5 ? page.columns.length : 5}`}>
                {page.columns.map((column, i) => (
                  column.link ?
                    <Link key={`ic-${i}`} className={`block as-link shadow-adv ${i < page.columns.length - 1 ? "" : "last"}`} to={column.link}>
                      {renderContent(column, page)}
                    </Link> :
                    <div key={`ic-${i}`} className={`block shadow-adv ${i < page.columns.length - 1 ? "" : "last"}`}>
                      {renderContent(column, page)}
                    </div>
                ))}
              </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blocks;