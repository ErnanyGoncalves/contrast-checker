import React from 'react'
import "./ResultCard.scss"

const ResultCard = () => {
  return (
    <div className='card'>
      <div className='colors'>
        <div className='colorA'>
          <div style={{backgroundColor:"#B0CBD3"}}/>
          <p>#B0CBD3</p>
        </div>
        <div className='colorB'>
          <div style={{backgroundColor:"#000000"}}/>
          <p>#000000</p>
        </div>
      </div>
      <div className='result'>
        <div className='preview'>
          <p style={{backgroundColor:"#B0CBD3",color:"#000000"}}>Text</p>
        </div>
        <p className='contrastRatio'>12,33 : 1</p>
      </div>
      {/* <div className='controllers'></div> */}
    </div>
  )
}

export default ResultCard