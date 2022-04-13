import React from "react";
import "./style.css";

function Resume() {
  return (
    <section className="page-section text-white mb-0">
      <div className="container">
        <h2 class="page-section-heading text-left text-uppercase text-white">
          Resume
        </h2>

        <div>
          <div class="mt-5">
            <h3>
              {" "}
              Download my{" "}
              <a
                href="https://github.com/fondofhats/react-portfolio/raw/main/docs/MichaelGiddingsResume.docx"
                class="link"
              >
                Resume
              </a>
            </h3>
            <p class="mt-5">
              <a href="https://www.linkedin.com/" target="_blank">
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="inkedIn"
                />
              </a>
            </p>
            <h2 className="top-title">Front-end Proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>React</li>
            </ul>
          </div>
        </div>

        <div class="justify-content-center mt-5">
          <div>
            <h2 className="top-title">Back-end Proficiencies</h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>Rest</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
