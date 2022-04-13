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
            <h2 className="top-title">Sampreeti Das</h2>
            <ul>
              <li>
                Core competencies in enterpirse content management, full-stack
                web development, data architecture, and managing integrations.
              </li>
            </ul>

            <p class="mt-5">
              <a href="https://www.linkedin.com/">
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="inkedIn"
                />
              </a>
            </p>

            <a
              href="https://github.com/fondofhats/react-portfolio/raw/main/docs/MichaelGiddingsResume.docx"
              class="link"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div class="justify-content-center mt-5">
          <div>
            <h2 className="top-title">Proficiencies</h2>
            <ul>
              <li>
                SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service),
                C#.NET, ASP.NET, JAVA,
                <br />
                HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,
                IndexedDB,
                <br />
                Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL,
                APIs, Templating.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
