import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import style from "./Projects.module.css";
import Project from "../../components/Project";
import Technologies from "../../components/Technologies";
//images
import Portfolio from "../../assets/images/portfolio.png";
import SCPAPI from "../../assets/images/scp_api_doc.png";
import Weather from "../../assets/images/weather_app.png";

//techs
import React from "../../assets/images/tec_logos/react.png";
import Laravel from "../../assets/images/tec_logos/laravel.png";
import Vue from "../../assets/images/tec_logos/vue.png";

let Projects = () => {
  let content = (
    <motion.div
      key="projects"
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
      <Container className={`${style.container} w-100`}>
        <div className={`${style.item} text-center`}>
          <h2>
            My Projects{" "}
            <i className={`d-block font-italic font-weight-light`}>
              Here is my job
            </i>
          </h2>
          <Project
            img={Portfolio}
            description="My cool portfolio done with React using Boostrap React and Framer Motion for the transitions."
            title="My Portfolio"
            app_url="https://gerardovillalobos.netlify.app/"
            github_url="https://github.com/elGerardo/my-portfolio"
          >
            <Technologies image="react" name="React" color="#4cbddc" />
            <Technologies
              image="bootstrap_react"
              name="Bootstrap React"
              color="#4cbddc"
            />
          </Project>
          <Project
            img={SCPAPI}
            title="SCP API"
            description="API based on the SCP Foundation monsters, the API doc was done with Nuxt/Vue and the backend with Laravel."
            app_url="https://scpapidoc.netlify.app/"
            github_url="https://github.com/elGerardo/SCP-API"
          >
            <Technologies image="nuxt" name="Nuxt" color="#00c590" />
            <Technologies
              image="bootstrap_vue"
              name="Bootstrap Vue"
              color="#00c590"
            />
            <Technologies image="Laravel" name="Laravel" color="#e32628" />
            <Technologies image="mysql" name="MySQL" color="#d18434" />
          </Project>
          <Project
            img={Weather}
            description="A simple wheater app done with Vue consuming the Open Weather API."
            title="Weather App"
            app_url="https://mycoolwheaterapp.netlify.app/"
            github_url="https://github.com/elGerardo/weather-app"
          >
            <Technologies image="vue" name="Vue" color="#3eb883" />
          </Project>
        </div>
      </Container>
    </motion.div>
  );

  return content;
};

export default Projects;
