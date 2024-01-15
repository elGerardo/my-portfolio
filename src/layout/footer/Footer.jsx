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
import Instagram from "/images/instagram.png";

const Footer = () => {
  const content = (
    <Container className={`${style.container} mb-4 w-75`}>
      <hr />
      <div className={`${style.content} w-100 justify-content-between`}>
        <div>
          <p className={`m-0`}>Let's do something great!</p>
          <p>Contact me using my social media</p>
          <a
            href="https://linkedin.com/in/gerardo-villalobos-gamiño"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="githubpic" />
          </a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <img src={CV} alt="cvpic" />
          </a>
          <a
            href="https://github.com/elGerardo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="githubpic" />
          </a>
          <a
            href="https://www.instagram.com/ggerardius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagrampic" />
          </a>
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
