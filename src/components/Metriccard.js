import React from 'react'

const Metriccard = (props) => {
  return (
    <div>
        <div className={`card bg-primary text-white ${props.cardNo}`}>
            <img className="card-img-top" src={props.imgsrc} alt={props.alt}/>
            <div className="card-body">
                <div className='card-text'>{props.cardText}</div>
            </div>
        </div>
    </div>
  )
}

export default Metriccard