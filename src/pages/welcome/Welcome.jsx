import style from "./Welcome.module.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Github from "../../assets/images/github.png";
import CV from "../../assets/images/cv.png";
import Instagram from "../../assets/images/instagram.png";
import Pdf from "../../assets/files/CV.pdf";

let Welcome = () => {
  let [skills, setSkills] = useState("Developer");
  let [countSkill, setCountSkill] = useState("");

  useEffect(() => {
  }, [])

  let content = (
    <motion.div
      key="welcome"
      initial={{ opacity: 0, y: -200 }}
      transition={{ y: { duration: 0.5 } }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.6,
        },
      }}
      exit={{ opacity: 0, y: 200 }}
    >
      <Container
        className={`${style.container} d-flex justify-content-center align-items-center w-100`}
      >
        <div>
          <p>Hi, I'm</p>
          <h1 className={`${style.my_name}`}><span></span>Gerardo Villalobos</h1>
          <p>and I'm Developer, Creative and Innovator ;)</p>
          <div>
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
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <img src={CV} alt="cvpic" />
            </a>
          </div>
          <div className={`${style.take_trip} d-flex justify-content-center align-items-center`}>
            <p>Go</p>
          </div>
        </div>
      </Container>
    </motion.div>
  );

  return content;
};

export default Welcome;
