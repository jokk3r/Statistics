import React from 'react';
import "./Footer.scss";
import Facebook from "./../../../img/icon__facebook.svg"
import Instagram from "./../../../img/icon__instagram.svg"
import Twitter from "./../../../img/icon__twitter.svg"
import Ball from "./../../../img/icon__ball.svg"

function Footer() {
    return (
      <footer>
        <div className="container">
            <div className="footer">
                <div className="footer__item">
                    <ul className="footer__list">
                        <li className="footer__title">Company</li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Main</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">How it works</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Pricing</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">FAQ</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__title">Legal</li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Claim</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Privacy</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__title">Support</li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Pricing</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Documentation</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Guides</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">API Status</a></li>
                    </ul>
              
                </div>
                <div className="footer__item">
                        <div className="footer__form">
                        <div className="footer__title">Subscribe to our newsletter! </div>
                        <div className="footer__text">The latest news, articles, and resources, sent to your inbox weekly.</div>
                        <label className="footer__form-label">
                            <input type="text" className='footer__form-input' placeholder='Your Email'/>
                            <button type="submit" className='btn btn__primary footer__form-btn'>Learn more</button>
                        </label>
                        </div>
                </div>
            </div>
            <div className="footer__copy">
                <div className="footer__copy-item">© 2022 All rights reserved.</div>
                <div className="footer__copy-item">
                    <ul className="copy__list">
                        <li className="copy__list-item"><a href="#"><img src={Facebook} alt="img" /></a></li>
                        <li className="copy__list-item"><a href="#"><img src={Instagram} alt="img" /></a></li>
                        <li className="copy__list-item"><a href="#"><img src={Twitter} alt="img" /></a></li>
                        <li className="copy__list-item"><a href="#"><img src={Ball} alt="img" /></a></li>
                    </ul>
                </div>
                
            </div>
        </div>
      </footer>
    );
}

export default Footer;