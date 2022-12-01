import React, { useEffect } from "react";
import useContrastStore from "../../hooks/useContrastStore";
import Message from "../Message/Message";
import ResultCard from "./ResultCard/ResultCard";
import "./Results.scss";

const Results = ({ results }: any) => {

  const filteredResults = useContrastStore((state: { filteredResults: any }) => state.filteredResults);
  const criteria = useContrastStore((state: { criteria: any }) => state.criteria);
  const changeCriteriaFilter = useContrastStore(
    (state: { changeCriteriaFilter: any }) => state.changeCriteriaFilter
  );
  const setFilteredResults = useContrastStore(
    (state: { setFilteredResults: any }) => state.setFilteredResults
  );

  // Tentar eliminar use effect
  // Incluir função de setFilteredResults na funcao do changeCriteriaFilter
  useEffect(() => {
    setFilteredResults(results)
  }, [results,criteria]);

  return (
    <>
      <h2>Results</h2>
      <label className="switchLabel" htmlFor="switch">
        Criteria
        <div>
          <span style={{ color: criteria ==="AA" ? "#000000" : "#919191" }}>AA</span>
          <div className="switch">
            <input
              type="checkbox"
              name="criteria"
              id="switch"
              checked={criteria !== "AA"}
              onChange={changeCriteriaFilter}
            />
            <span className="slider"></span>
          </div>
          <span style={{ color: criteria === "AAA" ? "#000000" : "#919191" }}>AAA</span>
        </div>
      </label>

      {filteredResults.length > 0 ? (
        <div className="grid">
          {filteredResults.map((v: any, i: number) => (
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
