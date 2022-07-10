import React,{useState} from 'react';
import "./Pricing.scss"
import Card from "./../../img/iconCard.svg"
import Money from "./../../img/iconMoney.svg"
import Chat from "./../../img/iconChat.svg"
import Info from "./../../img/priceInfo.svg"
import InfoPro from "./../../img/priceInfo-pro.svg"
import MoneyD from "./../../img/iconMoney-dark.svg"
import CardD from "./../../img/iconCard-dark.svg"
import Bonus from "./../../img/Bonus.svg"

function Pricing() {
    const [switcher, setSwitcher] = useState(false)
    let className = 'switcher__btn';
    if (switcher) {
      className += ' active';
    }
    return (
        <section className="section__pricing">
            <div className="container">
                <div className="pricing__header">
                    <div className="pricing__header-item">
                        <h3 className="section__title">Pricing</h3>
                        <p className="section__text">Chose the most suitable type of subscription for you!</p>
                    </div>
                <div className="pricing__header-item">
                    <div className="billing" onClick={()=> setSwitcher(!switcher)}>
                        {!switcher?( <div className="billing__item active">Billed yearly</div>):( <div className="billing__item">Billed yearly</div>)}
                      {/*   <div className="billing__item active">Billed yearly</div> */}
                        <div className="billing__item">
                            <div className="switcher" >
                                <div className={className}></div>
                            </div>
                        </div>
                        {!switcher?( <div className="billing__item">Billed monthly</div>):( <div className="billing__item active">Billed monthly</div>)}
                      
                    </div>
                </div>
                </div>
                <div className="price">
                    <div className="price__item">
                        <div className="price__item-name">Rookie <span>Early bird 40% off!</span></div>
                        <div className="price__item-oldprice">$119.99</div>
                        <div className="price__item-price">$55.99 <span>/mo</span> </div>
                        <div className="price__item-period">1 year</div>
                        <div className="price__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</div>
                        <div className="price__item-button">
                            <a href="#" className='btn btn__primary price__btn'>Subscribe</a>
                        </div>
                        <ul className="price__list">
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">Preflop sims only</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">No ante games</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">No short stack</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Money} alt="card" /></div>
                            <div className="price__list-item--text">50bbs</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Money} alt="card" /></div>
                            <div className="price__list-item--text">100bbs</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">Full pot open</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="price__item price__item-pro">
                        <img className='bonus' src={Bonus} alt="" />
                        <div className="price__item-name">PRO <span>Early bird 40% off!</span></div>
                        <div className="price__item-oldprice">$249.99</div>
                        <div className="price__item-price">$193.99 <span>/mo</span> </div>
                        <div className="price__item-period">1 year</div>
                        <div className="price__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</div>
                        <div className="price__item-button">
                            <a href="#" className='btn btn__primary price__btn'>Become a PRO</a>
                        </div>
                        <ul className="price__list">
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={CardD} alt="card" /></div>
                            <div className="price__list-item--text">Preflop sims with flop sims</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={CardD} alt="card" /></div>
                            <div className="price__list-item--text">Flop aggregared report</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={CardD} alt="card" /></div>
                            <div className="price__list-item--text">Multiple preflop sims</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={CardD} alt="card" /></div>
                            <div className="price__list-item--text">Many stack sizes</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Chat} alt="card" /></div>
                            <div className="price__list-item--text">500 calculations</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={MoneyD} alt="card" /></div>
                            <div className="price__list-item--text">100bbs</div>
                            <div className="price__list-item--icon"><img src={InfoPro} alt="info" /></div>
                            </li>
                        </ul>
                    </div>
                    <div className="price__item">
                        <div className="price__item-name">High-Roller</div>
                        <div className="price__item-subname">Coming Soon</div>
                        <div className="price__item-period">1 year</div>
                        <div className="price__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eleifend tristique scelerisque eget.</div>
                        <div className="price__item-button">
                            <a href="#" className='btn btn__primary price__btn'>Let Me Know</a>
                        </div>
                        <ul className="price__list">
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">Turns and rivers aggregation reports</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">Complete turns and river</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">Preflop chart table</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Money} alt="card" /></div>
                            <div className="price__list-item--text">50bbs</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Money} alt="card" /></div>
                            <div className="price__list-item--text">100bbs</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                            <li className="price__list-item">
                            <div className="price__list-item--img"><img src={Card} alt="card" /></div>
                            <div className="price__list-item--text">No short stack</div>
                            <div className="price__list-item--icon"><img src={Info} alt="info" /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;