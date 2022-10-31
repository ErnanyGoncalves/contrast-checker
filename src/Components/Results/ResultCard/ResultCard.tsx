import React from "react";
import "./ResultCard.scss";

const ResultCard = ({ colors, ratio }: any) => {
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

        <div className="preview" style={{backgroundColor: colors[0]}}>
          <p style={{ color: colors[1] }}>Text</p>
        </div>
        <p className="contrastRatio">{ratio} : 1</p>
        <div className="controllerA">S</div>
      </div>
    )
  );
};

export default ResultCard;
