import React from "react";
import Block from "../../../components/block";

import "./Rows.scss"

const Rows = ({ isVisible, page }) => {

  return (
    <div className={`rows ${page.isReducedMargin ? "reduced-margin" : ""} ${isVisible ? "active" : ''}`}>
      {page.rows.map((row, i) => (
        <Block className={(i % 2) ? "reverse" : ""} data={row} key={`fr-${i}`}/>
      ))}
    </div>
  );
}

export default Rows;