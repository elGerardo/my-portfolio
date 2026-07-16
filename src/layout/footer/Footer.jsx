import style from "./Footer.module.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

//files
import Pdf from "../../assets/files/CV.pdf";

//images
import Linkedin from "/images/linkedin.png"
import CV from "/images/cv.png";
import Github from "/images/github.png";

const Footer = () => {
  const content = (
    <Container className={`${style.container} mb-4 w-75`}>
      <hr />
      <div className={`${style.content} w-100 justify-content-between`}>
        <div>
          <p style={{ fontSize: "13px" }} className={`m-0`}>Let's do something great!</p>
          <p  style={{ fontSize: "13px" }}>Contact me using my social media</p>
          <div className={style.socialRow}>
            <div className="rounded-pill border text-dark shadow-sm py-2 px-4">
              <a href="https://linkedin.com/in/gerardo-villalobos-gamiño" target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-dark text-decoration-none">
                <img src={Linkedin} alt="LinkedIn" /> <p className="m-0">LinkedIn</p>
              </a>
            </div>
            <div className="rounded-pill border text-dark shadow-sm py-2 px-4">
              <a href={Pdf} target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-dark text-decoration-none">
                <img src={CV} alt="CV" /> <p className="m-0">CV</p>
              </a>
            </div>
            <div className="rounded-pill border text-dark shadow-sm py-2 px-4">
              <a href="https://github.com/elGerardo" target="_blank" rel="noopener noreferrer"
                className="d-flex align-items-center gap-2 text-dark text-decoration-none">
                <img src={Github} alt="GitHub" /> <p className="m-0">GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div className={`${style.with_love} text-center`}>
          <p>
            Portfolio done with <FontAwesomeIcon icon={faHeart} /> and React by
            Gerardo
          </p>
        </div>
      </div>
    </Container>
  );

  return content;
};

export default Footer;
