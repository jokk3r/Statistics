import React, { useState } from 'react'
import "./Features.scss"

const SinglePunkt = ({ icon, heading, content, classMain}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={classMain}  onClick={() => setIsActive(!isActive)}>
    <div className="accordion__item-trigger">
        <div className="trigger__icon"><img src={icon} alt="icon" /></div>
        <div className="trigger__text">{heading}</div>
    </div>
    {isActive && <div className="accordion__item-content">  <div className="content__text">{content}</div></div>}
 
</div>)
}

export default SinglePunkt




