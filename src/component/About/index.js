import React from "react";
import profilePic from "../../assets/images/sample-profile.jpg";

const About = () => {
  return (
    <section className="page-section text-white mb-0">
      <div className="container">
        <h2 class="page-section-heading text-left text-uppercase text-white">
          About Me
        </h2>

        <div className="row">
          <div className="col-lg-12 mt-12">
            <img
              src={profilePic}
              alt="Official profilepic"
              width="100"
              className="mt-4"
            />
            <p className="lead mt-4">
              I am Sampreeti Das undertaking the full stack web development
              course at the Manchester University Coding Bootcamp. <br />
              <br />I have done a number of projects in the course so far and my
              portfolio details the projects. I am learning new skills from the
              course and wish to implement the skillset in future endeavours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
