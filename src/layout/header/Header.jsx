import style from "./Header.module.css"
import { Container } from "react-bootstrap";

let Header = () => {
    let content = (
        <div className={`${style.container} py-3 w-100 position-fixed`}>
            <Container className={`${style.content} d-flex justify-content-between align-items-center`}>
                <h1 className={style.brand}>Gerardo</h1>
                <span className={style.subtitle}>FullStack Developer</span>
            </Container>
        </div>
    );

    return content;
}

export default Header;