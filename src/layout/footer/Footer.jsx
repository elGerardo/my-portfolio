import style from "./Footer.module.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//files
import Pdf from "../../assets/files/CV.pdf";

//images
import Linkedin from "/images/linkedin.png"
import SwipeGif from "/images/swipe.gif";
import CV from "/images/cv.png";
import Question from "/images/question.png";
import Github from "/images/github.png";
import Instagram from "/images/instagram.png";

const Footer = () => {
  const [instructions, setInstructions] = useState({
    questionIcon: { marginTop: 0 },
    instructionsContent: { marginTop: "20px" },
  });

  const showInstructions = () => {
    setInstructions({
      questionIcon: { marginTop: "-90px" },
      instructionsContent: { marginTop: "-32.5px" },
    });

    setTimeout(() => {
      setInstructions({
        questionIcon: { marginTop: 0 },
        instructionsContent: { marginTop: "20px" },
      });
    }, 5000);
  };

  const content = (
    <Container className={`${style.container} mb-4 w-75`}>
      <div className={`${style.instructions_container} w-100`}>
        <img
          src={Question}
          alt="question"
          className={`${style.question_icon}`}
          onClick={showInstructions}
          style={{ ...instructions.questionIcon }}
        />
        <div
          className={`${style.instructions_content} d-flex align-items-center`}
          style={{ ...instructions.instructionsContent }}
        >
          <p className={`m-0 me-3`}>
            You can swipe between pages with your fingers
          </p>
          <img src={SwipeGif} alt="swipe" className={`${style.swipe_gif}`} />
        </div>
      </div>

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
