import style from "./AboutMe.module.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Technologies from "../../components/Technologies";

//Images
import MyPic from "../../assets/images/pic.jpg";
import Laravel from "../../assets/images/tec_logos/laravel.png";
import Net from "../../assets/images/tec_logos/net.png";

import React from "../../assets/images/tec_logos/react.png";
import Nuxt from "../../assets/images/tec_logos/nuxt.png";
import Vue from "../../assets/images/tec_logos/vue.png";
import Bootstrap from "../../assets/images/tec_logos/bootstrap.png";

import Mysql from "../../assets/images/tec_logos/mysql.png";
import Sqlserver from "../../assets/images/tec_logos/sqlserver.png";

import Figma from "../../assets/images/tec_logos/figma.png";
import Photoshop from "../../assets/images/tec_logos/photoshop.png";

let AboutMe = () => {
  let content = (
    <motion.div
      key="about"
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
        className={`${style.container} d-flex justify-content-center align-items-center`}
      >
        <div className={`${style.info} w-100`}>
          <div className={`${style.image_info } text-center justify-content-center align-items-center d-flex`}>
            <img src={MyPic} />
          </div>
          <div className={`${style.text_info}`}>
            <h2 className={`my-5`}>
              <b>About Me</b>
              <i>I'll promise you'll find something interesting</i>
            </h2>
            <p>
              I'm a young student of 22 years, I am currently studying of
              Technologies of Information at the area of Multiplatform Develop
              Software at Universidad Tecnológica de Tijuana. I consider myself
              a self-taught person who enjoys what he does, because I really
              enjoy the world of software development.
            </p>
            <p>
              <b>Technologies I've managed</b>
            </p>
            <div className={`${style.technologies} align-middle`}>
              <Technologies image="laravel" name="Laravel" color="#e32628" />
              <Technologies image="net" name=".Net" color="#5c2992" />
              <Technologies image="react" name="React" color="#4cbddc" />
              <Technologies image="vue" name="Vue" color="#3eb883" />
              <Technologies image="nuxt" name="Nuxt" color="#00c590" />
              <Technologies
                image="bootstrap"
                name="Bootstrap"
                color="#8809fb"
              />
              <Technologies image="mysql" name="MySQL" color="#d18434" />
              <Technologies
                image="sqlserver"
                name="SQLServer"
                color="#b2233f"
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
  );

  return content;
};

export default AboutMe;
