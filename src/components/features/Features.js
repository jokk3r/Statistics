import React, { useState } from 'react';
import "./Features.scss"
import {FeaturesData} from "./FeaturesData"
import SinglePunkt from "./SinglePunkt"
import Icon from "./../../img/Features__icon.svg"
import mainImg from "./../../img/Features__img.jpg"
import Avatar from "./../../img/quote__avatar.png"

function Features() {
/*     const [isActive, setIsActive] = useState(false); */
console.log(FeaturesData)
    return (
       <section className="section__fetures">
        <div className="container">
            <div className="section__icon"><img src={Icon} alt="icon" /></div>
            <h3 className="section__title">Features</h3>
            <div className="features">
                <div className="features__item">
                    <div className="accordion">
                        {FeaturesData.map((item)=>{
                            return(
                                <SinglePunkt key={item.id} {...item} />
                            )  
                        })}
                    </div>

                    <div className="quote">
                        <div className="quote__item">
                        <div className="quote__item-img"><img src={Avatar} alt="avatar" /></div>
                        </div>
                        <div className="quote__item"> 
                        <div className="quote__item-info">
                            <div className="quote__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</div>
                            <div className="quote__author">Antonio A.</div>
                        </div>
                            </div>
                    </div>

                    <a href="" className="btn btn__primary quote__btn">
                    Get started <span>for free</span> 
                    </a>
                </div>
                <div className="features__item">
                    <img src={mainImg} alt="" />
                </div>
            </div>
        </div>
       </section>
    );
}

export default Features;