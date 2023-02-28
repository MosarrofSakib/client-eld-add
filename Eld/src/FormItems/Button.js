import React from 'react'
import '../Assets/css/button.css'
const Button = ({name}) => {
    return (
        <button className="btn">{name}</button>
    )
}
export default Button