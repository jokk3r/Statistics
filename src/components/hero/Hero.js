import React from 'react';
import "./Hero.scss"
import Mac from "./../../img/mac.png"

function Hero() {
    return (
        <div className='section__hero'>
            <img src={Mac} alt="mac" className='hero__img'/>
            <div className="hero__gradient"></div>
            <div className="container">
                <h1 className="hero__title">
                Lorem ipsum dolor sit amet, consectetur adipscinc elit
                </h1>
                <div className="hero__btns">
                    <a href="" className="btn btn__primary hero__btn">Start now</a>
                    <span className='hero__span'>or</span>
                    <a href="" className="btn btn__secondary hero__btn">Take a free tour</a>
                </div>
                <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</p>
            </div>
        </div>
    );
}

export default Hero;