import React from 'react';
import "./Story.scss"
import Video from "./../../img/video__preview.jpg"
import Play from "./../../img/play.svg"

function Story() {
    return (
        <section className='section__story'>
            <div className="container">
                <div className="story">

                <div className="story__item left__item">
                    <div className="story__item-video">
                        <img className='video__thumbnail' src={Video} alt="img" />
                        <img className='video__play' src={Play} alt="play" />
                    </div>
                </div>
                <div className="story__item right__item">
                    <h3 className="story__item-title">Our story</h3>
                    <p className="story__item-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.
                    </p>
                    <p className="story__item-text">   
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Story;