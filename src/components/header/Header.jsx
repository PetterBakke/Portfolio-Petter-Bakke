import React from "react";
import CTA from "./CTA";
import ME from "../../assets/meg.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Petter Bakke</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="This is me" />
        </div>

        <a href="#contact" className="scroll-down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header;