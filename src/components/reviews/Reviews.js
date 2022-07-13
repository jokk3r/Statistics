import React from 'react';
import "./Reviews.scss"
import RatingIcon from "./../../img/iconRating.svg"
import CommentImg from "./../../img/review-1.jpg"
import CommentImg2 from "./../../img/review-2.jpg"
import CommentImg3 from "./../../img/review-3.png"

function Reviews() {
    return (
       <section className='section__reviews'>
        <div className="container">
            <div className="review__header">
                    <h3 className="section__title">Reviews</h3>
                    <a className="review__link">Show all</a>
            </div>
            <div className="reviews">
            <div className="reviews__item">
                <div className="review__info">
                    <div className="review__info-item"><img src={CommentImg} alt="" /></div>
                    <div className="review__info-item">
                        <div className="review__title">Arlene Mccoy</div>
                        <div className="review__subtitle">BrPC founder, RIO Elite coach</div>
                    </div>
                </div>
                <div className="review__text">
                    With GO Wizard subscription yout get
                    access to an already complete training
                    platform, that is guaranteed to only get
                    better. For anyone serious about improving at
                    poker, it's the easiest call of all time.
                </div>
                <div className="review__footer">
                    <div className="review__footer-item">8:35 PM - Jan 6, 2022</div>
                    <div className="review__footer-item"><img src={RatingIcon} alt="raiting" /></div>
                </div>
            </div>
            <div className="reviews__item">
                <div className="review__info">
                    <div className="review__info-item"><img src={CommentImg2} alt="" /></div>
                    <div className="review__info-item">
                        <div className="review__title">Emil Schaefer</div>
                        <div className="review__subtitle">Poker Youtuber</div>
                    </div>
                </div>
                <div className="review__text">
                    Developers are very receptive and have
                    rapidly added features based on feedback.
                    They have separated themselves from other
                    similar tools and continue to make the
                    product better and better.
                </div>
                <div className="review__footer">
                    <div className="review__footer-item">9:35 PM - Jan 13, 2022</div>
                    <div className="review__footer-item"><img src={RatingIcon} alt="raiting" /></div>
                </div>
            </div>
            <div className="reviews__item">
                <div className="review__info">
                    <div className="review__info-item"><img src={CommentImg3} alt="" /></div>
                    <div className="review__info-item">
                        <div className="review__title">Mason Heaney</div>
                        <div className="review__subtitle">Mid-High Stakes player</div>
                    </div>
                </div>
                <div className="review__text">
                    I used to solve with PioSolver and have
                    tested some other sites, but the interface,
                    simplicity, accuracy, and effectiveness of
                    GTO Wizard is by far the best.
                </div>
                <div className="review__footer">
                    <div className="review__footer-item">10:35 PM - Jan 14, 2022</div>
                    <div className="review__footer-item"><img src={RatingIcon} alt="raiting" /></div>
                </div>
            </div>
            </div>
        </div>
       </section>
    );
}

export default Reviews;