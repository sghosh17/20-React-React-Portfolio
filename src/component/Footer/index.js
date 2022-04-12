import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="page-section text-white mb-0">
        <div className="container" style={{ textAlign: "center" }}>
          <h4 className="page-section-heading text-center text-uppercase text-white">
            Around the Web
          </h4>

          <a
            class="btn btn-outline-light btn-social mx-auto"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="red" size="3x" />
          </a>
          <a
            class="btn btn-outline-light btn-social mx-auto"
            href="https://github.com/sghosh17/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} color="red" size="3x" />
          </a>
          <a
            class="btn btn-outline-light btn-social mx-auto"
            href="https://twitter.com/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} color="red" size="3x" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
