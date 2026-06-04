import MyPic from "/images/pic.png";
import style from "./Welcome.module.css"
import { Container } from "react-bootstrap";
import Jobs from "../../components/Jobs";
import Technologies from "../../components/Technologies";
import SCPAPI from "/images/scp_api_doc.png";
import SFMapper from "/images/sf_app.png";
import ToDo from "/images/todo_app.png";
import Project from "../../components/Project";
import CVReader from "/images/cv_reader.png";

//images
import Linkedin from "/images/linkedin.png"
import CV from "/images/cv.png";
import Github from "/images/github.png";

//files
import Pdf from "../../assets/files/CV.pdf";

export default function Welcome() {
    return (
        <Container className={`${style.content} mb-5`}>
            {/* me */}
            <div className={`${style.header_content} d-md-flex align-items-center`}>
                <img
                    src={MyPic}
                    className={`${style.image} shadow-lg rounded-circle`}
                />
                <div className="ms-md-5 my-5">
                    <p className="m-0" style={{ fontSize: '18px' }}>Hi, I'm</p>
                    <h1 className="m-0" style={{ fontSize: '36px' }}>Gerardo Villalobos Gamiño</h1>
                    <p className="m-0" style={{ fontSize: '18px' }}>and I'm FullStack Developer ;)</p>

                    <hr />
                    <div className={`w-100 justify-content-between`}>
                        <a
                            href="https://linkedin.com/in/gerardo-villalobos-gamiño"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Linkedin} alt="githubpic" style={{width: "28px"}} />
                        </a>
                        <a href={Pdf} target="_blank" rel="noopener noreferrer" className="mx-4">
                            <img src={CV} alt="cvpic" style={{width: "28px"}} />
                        </a>
                        <a
                            href="https://github.com/elGerardo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Github} alt="githubpic" style={{width: "28px"}} />
                        </a>
                    </div>
                </div>
            </div>
            {/* about me */}
            <p id="about"></p>
            <div className={`pt-5`}>
                <h2 className={`mt-5`}>
                    <p className="m-0">About Me</p>
                    <p className="fs-5 fst-italic fw-light">I'll promise you'll find something interesting</p>
                </h2>
                <p>
                    I'm a Software Development and Management Engineer passionate about web development and building solutions that make a difference based in Tijuana, México.
                    I graduated from the Universidad Tecnológica de Tijuana.
                </p>
                <p>
                    Focused my career on web technologies, working on diverse projects ranging from process improvement initiatives to CRM systems that challenge me to grow professionally while allowing me to demonstrate my technical abilities.
                </p>
                <p>
                    I've had the opportunity to work in different companies that challenged me to show what I'm capable of and at the same time learn and improve my soft and tech skills.
                </p>
                <h2 className={`mt-5`}>
                    <p className="m-0">Proffesional Experience</p>
                    <p className="fs-5 fst-italic fw-light">My carrer</p>
                </h2>
                <div>
                    <Jobs
                        image="logo_gpocsi"
                        jobTitle="Grupo CSI"
                        title="Jun/2024 - Dec/2025"
                        description="FullStack Developer"
                    />
                    <Jobs
                        image="multitaskr"
                        jobTitle="Multitaskr"
                        title="Sept/2022 - Jun/2024"
                        description="FullStack Developer"
                    />
                    <Jobs
                        image="bajadevelopers"
                        jobTitle="BajaDevelopers"
                        title="Sept/2021 - Jul/2022"
                        description="FullStack Developer"
                    />
                </div>
                <h2 className={`mt-5`}>
                    <p className="m-0">Technologies I've managed</p>
                    <p className="fs-5 fst-italic fw-light">Code & Databases</p>
                </h2>
                <div className={`${style.technologies} align-middle`}>
                    <Technologies image="python" name="Python" color="#4081B3" />
                    <Technologies image="nodejs" name="NodeJS" color="#84ce24" />
                    <Technologies image="laravel" name="Laravel" color="#e32628" />
                    <Technologies image="fastapi" name="FastAPI" color="#05998B" />
                    <Technologies image="react" name="React" color="#4cbddc" />
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
                    <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
                    <Technologies image="mysql" name="MySQL" color="#d18434" />
                    <Technologies image="postgres" name="Postgres" color="#2F6792" />
                    <Technologies image="docker" name="Docker" color="#079CEC" />
                    <Technologies image="angular" name="Angular" color="#D70230" />
                </div>
            </div>
            {/* projects */}
            <p id="projects"></p>
            <div className={`pt-5`}>
                <h2 className={`mt-5`}>
                    <p className="m-0">My Projects</p>
                    <p className="fs-5 fst-italic fw-light">A little bit of my tech skills</p>
                </h2>

                <Project
                    img={CVReader}
                    title="CV Reader"
                    description="A CV Reader application that helps you manage and analyze resumes efficiently with IA."
                    app_url="https://cv-reader-app.up.railway.app/"
                >
                    <Technologies image="react" name="ReactJS" color="#4cbddc" />
                    <Technologies image="fastapi" name="FastAPI" color="#05998B" />
                </Project>

                <Project
                    img={SCPAPI}
                    title="SCP API"
                    description="API based on the SCP Foundation monsters, the API doc was done with NextJs/React and the backend with Laravel."
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
                    github_url="https://github.com/elGerardo/trello_clone_app"
                >
                    <Technologies image="nextjs" name="NextJs" color="#000000" />
                    <Technologies image="python" name="Python" color="#4081B3" />
                    <Technologies image="postgres" name="Postgres" color="#2F6792" />
                    <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
                </Project>
            </div>
        </Container>
    )
}