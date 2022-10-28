import React from 'react'
import "./ResultCard.scss"

const ResultCard = ({colors,ratio}:any) => {
  return colors && (
    <div className='card'>
      <div className='colors'>
        <div className='colorA'>
          <div style={{backgroundColor:colors[0]}}/>
          <p>{colors[0]}</p>
        </div>
        <div className='colorB'>
          <div style={{backgroundColor:colors[1]}}/>
          <p>{colors[1]}</p>
        </div>
      </div>
      <div className='result'>
        <div className='preview'>
          <p style={{backgroundColor:colors[0],color:colors[1]}}>Text</p>
        </div>
        <p className='contrastRatio'>{ratio}</p>
      </div>
      {/* <div className='controllers'></div> */}
    </div>
  )
}

export default ResultCard