import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import Welcome from "../pages/welcome/Welcome.jsx";
import AboutMe from "../pages/about/AboutMe.jsx"
import Projects from "../pages/projects/Projects.jsx";

let AnimationRoute = () => {
  let location = useLocation();

  let content = (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Welcome />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );

  return content;
};

export default AnimationRoute;
