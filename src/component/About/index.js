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
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
