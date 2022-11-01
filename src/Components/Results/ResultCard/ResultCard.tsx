import React, { useState } from "react";
import "./ResultCard.scss";

const ResultCard = ({ colors, ratio }: any) => {
  const [i,setI]=useState(0);

  return (
    colors && (
      <div className="card">
        <div className="colorA">
          <div style={{ backgroundColor: colors[0] }} />
          <p>{colors[0]}</p>
        </div>
        <div className="colorB">
          <div style={{ backgroundColor: colors[1] }} />
          <p>{colors[1]}</p>
        </div>

        <div className="preview" style={{backgroundColor: colors[0+i]}}>
          <p style={{ color: colors[1-i] }}>Text</p>
        </div>
        <p className="contrastRatio">{ratio} : 1</p>
        <button className="controllerA" onClick={()=>setI(i===0?1:0)}>S</button>
      </div>
    )
  );
};

export default ResultCard;
