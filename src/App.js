import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
// import Resume from "./component/Resume";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");
  const [navSections] = useState([
    "About Me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);

  const displaySection = () => {
    if (currentSection === "About Me") {
      console.log("current state: ", currentSection);
      return <About />;
    } else if (currentSection === "Portfolio") {
      console.log("current state: ", currentSection);
      return <Portfolio />;
    } else if (currentSection === "Resume") {
      console.log("current state: ", currentSection);
      return "";
    } else if (currentSection === "Contact") {
      console.log("current state: ", currentSection);
      return <Contact />;
    } else {
      console.log("current state: ", currentSection);
      return "";
    }
  };

  return (
    <main className="content">
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        navSections={navSections}
      />
      {displaySection()}
      <Footer />
    </main>
  );
}

export default App;
