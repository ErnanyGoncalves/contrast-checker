import React from 'react'
import ResultCard from './ResultCard/ResultCard';
import "./Results.scss";

const Results = () => {
  return (
    <>
    <h2>Results</h2>
    <div className='grid'>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
    </div>
    </>
  )
}

export default Results