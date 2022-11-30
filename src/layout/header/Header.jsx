import style from "./Header.module.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

let Header = () => {
    let content = (
        <Container className={`${style.container} py-3 w-75 position-fixed d-flex justify-content-between`}>
            <Link to="/" style={{color:"#FFFFFF", textDecoration:"none"}} className={`mx-5`}><h1>Gerardo</h1></Link>
            <div>
                <Link to="about" style={{color:"#FFFFFF", textDecoration:"none"}} className={`mx-5`}>about me</Link>
                <Link to="projects" style={{color:"#FFFFFF", textDecoration:"none"}} className={`mx-5`}>my projects</Link>
            </div>
        </Container>
    );

    return content;
}

export default Header;