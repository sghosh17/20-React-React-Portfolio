const Nav = (props) => {
  const { navSections, setCurrentSection, currentSection } = props;

  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Sampreeti Das
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive"></div>
        <ul className="navbar-nav ms-auto">
          {navSections.map((section) => (
            <li className="nav-item mx-0 mx-lg-1" key={section}>
              <a
                href={"#"}
                onClick={() => {
                  setCurrentSection(section);
                  // console.log(
                  //   "section :: ",
                  //   "#" & section.toLowerCase().replace(/\s/g, "")
                  // );
                }}
                className={
                  currentSection === section
                    ? "nav-active nav-link py-3 px-0 px-lg-3 rounded"
                    : "nav-inactive nav-link py-3 px-0 px-lg-3 rounded"
                }
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
