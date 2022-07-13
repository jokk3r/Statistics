import React from 'react';
import Icon from "./../../img/FAQ__icon.svg"
import {QuestionsData} from "./QuestionsData"
import SinglePunkt from "./SinglePunkt"

function Questions() {
    return (
        <section className="section__faq" id="FAQ">
        <div className="container">
            <div className="section__icon"><img src={Icon} alt="icon" /></div>
            <div className="section__title">
              <h3>Frequently asked questions</h3>
            </div>
            <div className="faq">
            <div className="accordion">
                        {QuestionsData.map((item)=>{
                            return(
                                <SinglePunkt key={item.id} {...item} />
                            )  
                        })}
                    </div>
            </div>
        </div>
      </section>
    );
}

export default Questions;