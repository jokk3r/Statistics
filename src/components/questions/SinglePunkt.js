import React, { useState } from 'react'
import "./Questions.scss"


const SinglePunkt = ({ icon, heading, content}) => {
  const [isActive, setIsActive] = useState(false)
  let className = 'accordion__item';
  if (isActive) {
    className += ' accordion__item-active';
  }
  return (
    <div className={className}  onClick={() => setIsActive(!isActive)}>
    <div className="accordion__item-trigger">
        <div className="trigger__text">{heading}</div>
        <div className="trigger__img">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
    </div>
    {isActive && <div className="accordion__item-content">  <div className="content__text">{content}</div></div>}
 
</div>)
}

export default SinglePunkt




