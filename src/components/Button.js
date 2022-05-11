import React from 'react'

const Button = (props) => {
  return (
    <button className={props.btnType} onClick = {props.onclick}>{props.text}</button>
  )
}

export default Button