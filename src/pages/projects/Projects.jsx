import { motion } from "framer-motion";
import globalStyle from "../../assets/global.module.css";
import { Container } from "react-bootstrap";

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
      <Container
        className={`${globalStyle.container} d-flex justify-content-center align-items-center w-100`}
      >
        <h1>Projects</h1>
      </Container>
    </motion.div>
  );

  return content;
};

export default Projects;
