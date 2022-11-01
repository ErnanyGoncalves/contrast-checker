import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard/ResultCard";
import "./Results.scss";

const Results = ({ results }: any) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h2>Results</h2>
      <label className="switchLabel" htmlFor="switch">
        Criteria
        <div>
          <span style={{ color: !checked ? "#000000" : "#919191" }}>AA</span>
          <div className="switch">
            <input
              type="checkbox"
              name="criteria"
              id="switch"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="slider"></span>
          </div>
          <span style={{ color: checked ? "#000000" : "#919191" }}>AAA</span>
        </div>
      </label>
      <div className="grid">
        {results
          .filter(
            ({ tests }: any) => checked ? tests.aaaNormal && tests.aaaLarge : true
          )
          .sort((a: any, b: any) => b.ratio - a.ratio)
          .map((v: any, i: number) => (
            <ResultCard key={i} colors={v.colors} ratio={v.ratio} />
          ))}
      </div>
    </>
  );
};

export default Results;
