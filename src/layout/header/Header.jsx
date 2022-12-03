import style from "./Header.module.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

let Header = () => {
    let content = (
        <div className={`${style.container} py-3 w-100 position-fixed`}>
            <Container className={`${style.content} d-flex justify-content-between`}>
            <Link to="/" style={{color:"#FFFFFF", textDecoration:"none"}}><h1>Gerardo</h1></Link>
            <div>
                <Link to="about" style={{color:"#FFFFFF", textDecoration:"none"}}>about me</Link>
                <Link to="projects" style={{color:"#FFFFFF", textDecoration:"none"}} className={`mx-3`}>my projects</Link>
            </div>
            </Container>
        </div>
    );

    return content;
}

export default Header;