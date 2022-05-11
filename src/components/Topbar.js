import React from 'react'
import Button from './Button';
import { useState } from 'react'

const Topbar = () => {
    const [pageloc, setPageloc] = useState("top")

    const toggleButton = () => {
        (pageloc === "top" ? window.open("#winner",'_self') : window.open("#",'_self') )
        setPageloc((pageloc) => pageloc === "top" ? `bottom` : `top`)

    }

  return (
    <div className='fixed-top container-fluid topbar'>
        <div className='row'>
        <h1 className='col-12 col-sm-6 col-md-6 col-lg-6 text-center topbar-text '> &lt;🏎️&gt; </h1>
        <div className= 'col-12 col-sm-6 col-md-6 col-lg-6 text-center'>
        <Button btnType = {pageloc === "top" ? `btn top` : `btn bottom`}text={pageloc === "top" ? `See Predicted Winner` : `Back to Top`} onclick = {toggleButton} />
        </div>
        </div>
    </div>
  )
}

export default Topbar