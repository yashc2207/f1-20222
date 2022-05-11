import React from 'react'

const Team = (props) => {
  return (
    <div>
        <div className='container teamdata' id = {props.id}>
            <div className='row'>
                <div className='col-sm-8 col-md-8 col-lg-4 my-4 mx-auto'>
                    <img className = 'img-fluid' src = {props.imgsrc} alt = {props.imgalt}/>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7 my-auto text-white text-lg-left mx-lg-4'>
                    {props.text}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team