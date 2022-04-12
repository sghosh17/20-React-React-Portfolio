import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectPic from "../../assets/images/sample-profile.jpg";
import { MDBRipple } from "mdb-react-ui-kit";

const Project = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto">
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white"></div>
        </div>
        <MDBRipple
          className="bg-image"
          rippleTag="div"
          rippleColor="light"
          style={{ maxWidth: "24rem" }}
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/053.webp"
            className="w-100"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p
                    className="text-white mb-0"
                    style={{ marginRight: "10px", fontSize: "24px" }}
                  >
                    {project.title}
                  </p>
                  <a href={project.githubUrl} target="_blank">
                    <FontAwesomeIcon icon={faGithub} color="red" size="3x" />
                  </a>
                </div>
              </div>
            </div>
          </a>
        </MDBRipple>
      </div>
    </div>
  );
};

export default Project;
