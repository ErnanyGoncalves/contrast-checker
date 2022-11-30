import React, { useEffect, useState } from "react";
import { getAAAResults, getAAResults } from "../../utils/contrastFunctions";
import Message from "../Message/Message";
import ResultCard from "./ResultCard/ResultCard";
import "./Results.scss";

const Results = ({ results }: any) => {
  const [checked, setChecked] = useState(false);
  const [listOfResults, setListOfResults] = useState([{}]);
  useEffect(() => {
    if (!checked) {
      setListOfResults(getAAResults(results));
    } else {
      setListOfResults(getAAAResults(results));
    }
  }, [results,checked]);

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

      {listOfResults.length > 0 ? (
        <div className="grid">
          {listOfResults.map((v: any, i: number) => (
            <ResultCard key={i} colors={v.colors} ratio={v.ratio} />
          ))}
        </div>
      ) : (
        <Message
          msg={"None of its colors met the specified accessibility criteria."}
        />
      )}
    </>
  );
};

export default Results;
