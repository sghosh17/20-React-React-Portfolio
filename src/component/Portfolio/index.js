import React from "react";
import Project from "../Project";
import projects from "../../resources/projects";

const Portfolio = () => {
  return (
    <section className="page-section text-white mb-0">
      <div className="container">
        <h2 className="page-section-heading text-left text-uppercase text-white">
          Portfolio
        </h2>

        <div className="row justify-content-center">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
