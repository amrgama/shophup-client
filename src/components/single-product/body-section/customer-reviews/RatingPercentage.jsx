import React from 'react'

const RatingPercentage = ({percentage}) => {
  
    const renderedPercentageItems = Object.entries(percentage).map((perc, i)=>{
        return (
            <div key={i} className="d-flex align-items-center justify-content-between gap-3">
                <label htmlFor={`rate-${perc[0]}`} className="form-label">{perc[0]}</label>
                <input 
                    type="range" 
                    className="form-range"
                    value={perc[1]}
                    min="0"
                    max="100"
                    id={`rate-${perc[0]}`}
                    readOnly
                ></input>
                <span 
                    className="text-muted fw-bold"
                    style={{width: "40px"}}
                >{perc[1]}%</span>
            </div>
        )
    })
    return (
        <div>
            {renderedPercentageItems}
        </div>
    )
}

export default RatingPercentage