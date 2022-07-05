import React from 'react';
import "./Pricing.scss"

function Pricing() {
    return (
        <section className="section__pricing">
            <div className="container">
                <div className="pricing__header">
                    <div className="pricing__header-item">
                        <h3 className="section__title">Pricing</h3>
                        <p className="section__text">Chose the most suitable type of subscription for you!</p>
                    </div>
                <div className="pricing__header-item">
                    <div className="billing">
                        <div className="billing__item">Billed yearly</div>
                        <div className="billing__item">
                            <div className="switcher">
                                <div className="switcher__btn"></div>
                            </div>
                        </div>
                        <div className="billing__item">Billed monthly</div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;