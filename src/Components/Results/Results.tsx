import React from 'react'
import ResultCard from './ResultCard/ResultCard';
import "./Results.scss";

const Results = ({results}:any) => {
  return (
    <>
    <h2>Results</h2>
    <div className='grid'>
        {results.map((v:any,i:number)=><ResultCard key={i} colors={v.colors} ratio={v.ratio} />)}        
    </div>
    </>
  )
}

export default Results