import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import Welcome from "../pages/welcome/Welcome.jsx";

let AnimationRoute = () => {
  let location = useLocation();

  let content = (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  );

  return content;
};

export default AnimationRoute;
