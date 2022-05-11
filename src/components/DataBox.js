import React from 'react'
import promoCar from "./img_proto_car.jpg"

const DataBox = () => {
  return (
    <div className='container databox'>
    <div className = "row">
    <div className='p-10 col-12 col-sm-12 col-md-12 col-lg-6 mx-auto text-sm-justify text-lg-left'>
        <h2><strong>The 2022 Formula 1 season has begun</strong></h2>
        <br></br>
        <p>Are you a new fan or someone looking to learn about the sport on a casual basis?</p>
        <p>Don't worry, this site will get you on your way in no time!</p>
    </div>
    <div className='img-fluid p-10 col-12 col-sm-12 col-md-12 col-lg-4 mx-auto d-none d-md-block'>
        <img className = 'img-fluid' src={promoCar}/> 
    </div>
    </div>
    </div>
  )
}

export default DataBox