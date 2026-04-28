import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import style from "./Projects.module.css";
import Project from "../../components/Project";
import Technologies from "../../components/Technologies";

//images
import SCPAPI from "/images/scp_api_doc.png";
import SFMapper from "/images/sf_app.png";
import ToDo from "/images/todo_app.png";
import CVReader from "/images/cv_reader.png";

const Projects = () => {
  const content = (
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
            My Projects
            <i className={`d-block font-italic font-weight-light`}>
              Here is my job
            </i>
          </h2>
          <Project
            img={CVReader}
            title="CV Reader"
            description="A CV Reader application that helps you manage and analyze resumes efficiently with IA."
            app_url="https://cv-reader-app.up.railway.app/"
            github_url="https://github.com/elGerardo/cv_reader"
          >
            <Technologies image="nextjs" name="NextJs" color="#000000" />
            <Technologies image="Laravel" name="Laravel" color="#e32628" />
            <Technologies image="mysql" name="MySQL" color="#d18434" />
            <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
          </Project>
          <Project
            img={SCPAPI}
            title="SCP API"
            description="API based on the SCP Foundation monsters, the API doc was done with NextJs/React and the backend with Laravel."
            app_url="https://scpapi.netlify.app/"
            github_url="https://github.com/elGerardo/scp_api_v1"
          >
            <Technologies image="nextjs" name="NextJs" color="#000000" />
            <Technologies image="Laravel" name="Laravel" color="#e32628" />
            <Technologies image="mysql" name="MySQL" color="#d18434" />
            <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
          </Project>
          <Project
            img={ToDo}
            description="A Board App where you can store your tasks. This project pretend to be a Trello clone. The App is done with NextJs/React as Frontend using Tailwind with Python as Backend."
            title="Board App"
            app_url="https://myboardapp.netlify.app/"
            github_url="https://github.com/elGerardo/trello_clone_app"
          >
            <Technologies image="nextjs" name="NextJs" color="#000000" />
            <Technologies image="python" name="Python" color="#4081B3" />
            <Technologies image="postgres" name="Postgres" color="#2F6792" />
            <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
          </Project>
          <Project
            img={SFMapper}
            description="This Salesforce Mapper is an app that allows you to get data from your Salesforce Sobjects, the backend is done in ExpressJS to get the data of Salesforce using JSForce"
            title="Salesforce Mapper"
            app_url="https://salesforcemapper.netlify.app/"
            github_url="https://github.com/elGerardo/salesforce-mapper"
          >
            <Technologies image="react" name="React" color="#4cbddc" />
            <Technologies image="nodejs" name="NodeJS" color="#84ce24" />
            <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
            <Technologies image="jsforce" name="JSForce" color="#25A2DA" />
          </Project>
        </div>
      </Container>
    </motion.div>
  );

  return content;
};

export default Projects;
