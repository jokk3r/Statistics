import React,  { useState, useRef, useEffect } from "react";
import "./Header.scss";
import logo from "./../../../img/Logo.svg";
import Burger from "./../../../img/hamburger-menu.svg";
import Cross from "./../../../img/cross.svg";

function Header() {
    const [sidebar, setSidebar] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const showSidebar = () => setSidebar(!sidebar);
    const node = useRef();
    const widthToShowSidebar = 768;
  /*   useOnClickOutside(node, () => setSidebar(false)); */
    return (
    

        <header className="header__main" >
        <nav>
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
        <ul className="menu">
            <li className="menu__item"><a href="#" className="menu__item-link" data-scroll>How it works</a></li>
            <li className="menu__item"><a href="#" className="menu__item-link" data-scroll>Pricing</a></li>
            <li className="menu__item"><a href="#" className="menu__item-link" data-scroll>About Us</a></li>
            <li className="menu__item"><a href="#" className="menu__item-link" data-scroll>FAQ</a></li>
        </ul>
      <div className="nav__controlls">
          <div className="select"> EN
          </div>
          <div className="nav__buttons">
              <a href="#" className="btn btn__primary nav__btn">Start free trial</a>
              <a href="#" className="btn btn__secondary nav__btn">Sign In</a>
          </div>
      </div>
      {width > widthToShowSidebar ? (
        <div>
          <p>123</p>
        </div>
      ) : (
        <div className="nav__burger" onClick={showSidebar}>
        {sidebar ? (
          <img src={Cross} className="nav__logoBurger" alt="" />
        ) : (
          <img src={Burger} className="nav__logoBurger" alt="" />
        )}
      </div>
      )}
        <div className={sidebar ? "header__navMenu active" : "header__navMenu"}>
        <ul className="menu__items">
          <li className="menu__text">
            <a href="#howItWorks" className="menu__item">
              <p className="menu__p">
                How it works
              </p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#pricing" className="menu__item">
              <p className="menu__p">
               Pricing
              </p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#aboutUs" className="menu__item">
              <p className="menu__p">
              About Us
              </p>
            </a>
          </li>
          <li className="menu__text">
            <a href="#FAQ" className="menu__item">
              <p className="menu__p">
              FAQ
              </p>
            </a>
          </li>
        </ul>
        <div className="burger__buttons">
              <a href="#" className="btn btn__primary nav__btn burger__btn">Start free trial</a>
              <a href="#" className="btn btn__secondary nav__btn burger__btn">Sign In</a>
          </div>
      </div>
        </div>
</nav>
    </header>
  
    );
}

export default Header;