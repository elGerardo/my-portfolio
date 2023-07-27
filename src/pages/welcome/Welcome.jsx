import style from "./Welcome.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Github from "/images/github.png";
import CV from "/images/cv.png";
import Instagram from "/images/instagram.png";
import Pdf from "../../assets/files/CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Welcome = () => {

  let content = (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, x: -200 }}
      transition={{ y: { duration: 0.5 } }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        x: 200,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Container
        className={`${style.container} d-flex justify-content-center align-items-center w-100`}
      >
        <div className={`${style.content}`}>
          <p>Hi, I'm</p>
          <h1 className={`${style.dash_down}`}>
            <span></span>Gerardo Villalobos
          </h1>
          <p>and I'm Developer, Creative and Innovator ;)</p>
          <div>
            <a
              href="https://github.com/elGerardo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.social_link}`}
            >
              <img src={Github} alt="githubpic" />
            </a>
            <a
              href="https://www.instagram.com/ggerardius/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.social_link}`}
            >
              <img src={Instagram} alt="instagrampic" />
            </a>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.social_link}`}
            >
              <img src={CV} alt="cvpic" />
            </a>
          </div>
          <div
            className={`${style.take_trip} d-flex justify-content-center align-items-center`}
          >
            <motion.div
              whileHover={{
                x: 10,
              }}
              transition={{
                type: "spring",
              }}
            >
              <p className={`p-0 m-0 ${style.dash_down}`}>
                <span></span>
                <Link to="about">
                  Let's take the trip
                  <FontAwesomeIcon className={`mx-3`} icon={faCaretRight} />
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );

  return content;
};

export default Welcome;
