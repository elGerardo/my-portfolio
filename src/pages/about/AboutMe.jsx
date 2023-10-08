import style from "./AboutMe.module.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Technologies from "../../components/Technologies";
import { useLocation } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import useSwipe from "../../hooks/useSwipe";

//Images
import MyPic from "/images/pic.png";
import Jobs from "../../components/Jobs";

const AboutMe = () => {
  const navigate = useNavigate();
  const [initialX] = useState(
    useLocation().state !== null ? useLocation().state.initialX : -200
  );
  const [exitX, setExitX] = useState(200);
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe();

  const [goTo] = useState({
    left: () => {
      setExitX(-200);
      navigate("/projects", {
        state: {
          initialX: 200,
        },
      });
    },
    right: () => {
      setExitX(200);
      navigate("/", {
        state: {
          initialX: -200,
        },
      });
    },
    null: () => {},
    undefined: () => {},
  });

  const handleOnTouchEnd = () => {
    const direction = onTouchEnd();
    goTo[direction]();
  };

  const content = (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={() => handleOnTouchEnd()}
    >
      <motion.div
        key="about"
        initial={{ opacity: 0, x: initialX }}
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
          x: exitX,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Container
          className={`${style.container} d-flex justify-content-center align-items-center`}
        >
          <div className={`${style.info} my-5 w-100`}>
            <div
              className={`${style.image_info} text-center justify-content-center align-items-center d-flex`}
            >
              <img
                src={MyPic}
                className={`${style.image} shadow-lg rounded-circle`}
              />
            </div>
            <div className={`${style.text_info} shadow-lg rounded p-3`}>
              <h2 className={`my-5`}>
                <b>About Me</b>
                <i>I'll promise you'll find something interesting</i>
              </h2>
              <p>
                I am a young software engineer who is enthusiastic about the
                world of development, design and a lover of cats. I graduated
                from the Universidad Tecnológica de Tijuana. I began my
                professional life before finishing my degree because I had and
                continue to have the opportunity to work on technology projects
                that challenge me to continue growing and allow me to
                demonstrate my skills.
              </p>
              <p>
                <b>Proffesional Experience</b>
              </p>
              <div>
                <Jobs
                  image="bajadevelopers"
                  jobTitle="BajaDevelopers"
                  title="Sept/2021 - Jul/2022"
                  description="FullStack Developer"
                />
                <Jobs
                  image="multitaskr"
                  jobTitle="Multitaskr"
                  title="Sept/2022 - Currently"
                  description="Backend Developer"
                />
              </div>
              <p>
                <b>Technologies I've managed</b>
              </p>
              <div className={`${style.technologies} align-middle`}>
                <Technologies image="laravel" name="Laravel" color="#e32628" />
                <Technologies image="adonis" name="Adonis JS" color="#5A45FF" />
                <Technologies
                  image="express_node"
                  name="ExpressJs/NodeJs"
                  color="#84ce24"
                />
                <Technologies image="react" name="React" color="#4cbddc" />
                <Technologies image="nuxt" name="Nuxt" color="#00c590" />
                <Technologies
                  image="typescript"
                  name="TypeScript"
                  color="#007acc"
                />
                <Technologies
                  image="bootstrap"
                  name="Bootstrap"
                  color="#8809fb"
                />
                <Technologies image="mysql" name="MySQL" color="#d18434" />
                <Technologies
                  image="postgres"
                  name="Postgres"
                  color="#2F6792"
                />
                <Technologies image="figma" name="Figma" color="#f24d18" />
                <Technologies
                  image="photoshop"
                  name="Photoshop"
                  color="#2caafd"
                />
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );

  return content;
};

export default AboutMe;
