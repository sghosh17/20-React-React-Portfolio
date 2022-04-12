import React from "react";
import Nav from "../Nav";

const Header = (props) => {
  return (
    <header>
      <Nav
        navSections={props.navSections}
        setCurrentSection={props.setCurrentSection}
        currentSection={props.currentSection}
      ></Nav>
    </header>
  );
};

export default Header;
