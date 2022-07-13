import React from 'react';
import "./Learn.scss"
import learnImg from "./../../img/learn__img.png"
import learnIcon from "./../../img/iconLearn.svg"

function Learn() {
    return (
       <section class='section__learn'>
        <div class="container">
            <div class="learn">
                <div class="learn__item"><img className='learn__img' src={learnImg} alt="img" /></div>
                <div class="learn__item">
                    <div class="learn__icon"><img src={learnIcon} alt="learnIcon" /></div>
                    <div class="learn__title">Learn from the Pros</div>
                    <div class="learn__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</div>
                    <a href="#" class='btn btn__primary learn__btn'>Learn more</a>
                </div>
            </div>
        </div>
       </section>
    );
}

export default Learn;