import { useState, useEffect, useRef } from "react";
import MyPic from "/images/pic.png";
import style from "./Welcome.module.css";
import Jobs from "../../components/Jobs";
import Technologies from "../../components/Technologies";
import SCPAPI from "/images/scp_api_doc.png";
import ToDo from "/images/todo_app.png";
import Project from "../../components/Project";
import CVReader from "/images/cv_reader.png";
import GrupoCsiLogo from "/images/jobs/logo_gpocsi.jpg";

//images
import Linkedin from "/images/linkedin.png";
import CV from "/images/cv.png";
import Github from "/images/github.png";

//files
import Pdf from "../../assets/files/CV.pdf";

const TABS = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "technologies", label: "Technologies" },
    { id: "projects", label: "Projects" },
];

export default function Welcome() {
    const [activeTab, setActiveTab] = useState("about");
    const sectionRefs = useRef({});

    // Highlight tab based on scroll position
    useEffect(() => {
        const observers = [];
        TABS.forEach(({ id }) => {
            const el = sectionRefs.current[id];
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveTab(id);
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className={style.page}>
            {/* Profile Card */}
            <div className={style.profileCard}>
                <div className={style.profileHeader}>
                    <img src={MyPic} className={style.profilePic} alt="Gerardo" />
                    <div className={style.profileInfo}>
                        <h2>Hi, I am</h2>
                        <h1 className="fw-bold">Gerardo Villalobos Gamiño</h1>
                        <div className={style.roleRow}>
                            <span className={style.roleMeta}>FullStack Developer</span>
                        </div>
                    </div>
                </div>

                <div className={style.socialRow}>
                    <div className="rounded-pill border text-dark shadow-sm py-2 px-4 ">
                    <a href="https://linkedin.com/in/gerardo-villalobos-gamiño" target="_blank" rel="noopener noreferrer" 
                    className={`${style.socialLink} d-flex align-items-center gap-2 text-dark text-decoration-none`}>
                        <img src={Linkedin} alt="LinkedIn" /> <p className="m-0">LinkedIn</p>
                    </a>
                    </div>
                    
                    <div className="rounded-pill border text-dark shadow-sm py-2 px-4">
                    <a href={Pdf} target="_blank" rel="noopener noreferrer"
                    className={`${style.socialLink} d-flex align-items-center gap-2 text-dark text-decoration-none`}>
                        <img src={CV} alt="CV" /> <p className="m-0">CV</p>
                    </a>
                    </div>
                    <div className="rounded-pill border text-dark shadow-sm py-2 px-4">
                    <a href="https://github.com/elGerardo" target="_blank" rel="noopener noreferrer"
                    className={`${style.socialLink} d-flex align-items-center gap-2 text-dark text-decoration-none`}>
                        <img src={Github} alt="GitHub" /> <p className="m-0">GitHub</p>
                    </a>
                    </div>
                </div>
            </div>

            {/* Sticky Tab Navigation */}
            <div className={`${style.stickyTabs} shadow-sm`}>
                <div className={style.tabNav}>
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            className={`${style.tab} ${activeTab === tab.id ? style.activeTab : ""}`}
                            onClick={() => scrollTo(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Card — all sections visible */}
            <div className={style.contentCard}>
                {/* About */}
                <div id="about" ref={el => sectionRefs.current["about"] = el} className={style.section}>
                    <h2 className={style.sectionTitle}>Short bio</h2>
                    <p className={style.bioText}>
                        I'm a Software Development and Management Engineer passionate about web development
                        and building solutions that make a difference based in Tijuana, México.
                        I graduated from the Universidad Tecnológica de Tijuana.
                    </p>
                    <p className={style.bioText}>
                        Focused my career on web technologies, working on diverse projects ranging from
                        process improvement initiatives to CRM systems that challenge me to grow
                        professionally while allowing me to demonstrate my technical abilities.
                    </p>
                    <p className={style.bioText}>
                        I've had the opportunity to work in different companies that challenged me to
                        show what I'm capable of and at the same time learn and improve my soft and tech skills.
                    </p>
                    <div className={style.tags}>
                        {["FullStack", "Web Development", "React", "Node.js", "Python", "Laravel", "TypeScript", "Docker", "MySQL", "PostgreSQL"].map(tag => (
                            <span key={tag} className={style.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <hr/>

                {/* Experience */}
                <div id="experience" ref={el => sectionRefs.current["experience"] = el} className={style.section}>
                    <h2 className={style.sectionTitle}>Work experience</h2>
                    <Jobs
                        image="logo_gpocsi"
                        jobTitle="Grupo CSI"
                        title="Jun/2024 - Jul/2026"
                        description="FullStack Developer"
                        jobDescription="Led development of enterprise web applications, improving business processes and implementing CRM systems using modern web technologies."
                    />
                    <Jobs
                        image="multitaskr"
                        jobTitle="Multitaskr"
                        title="Sept/2022 - Jun/2024"
                        description="FullStack Developer"
                        jobDescription="Developed and maintained fullstack web applications, working with cross-functional teams to deliver scalable and reliable solutions."
                    />
                    <Jobs
                        image="bajadevelopers"
                        jobTitle="BajaDevelopers"
                        title="Sept/2021 - Jul/2022"
                        description="FullStack Developer"
                        jobDescription="Built web solutions for various clients, contributing to both frontend and backend development across multiple concurrent projects."
                    />
                </div>

                <hr/>

                {/* Technologies */}
                <div id="technologies" ref={el => sectionRefs.current["technologies"] = el} className={style.section}>
                    <h2 className={style.sectionTitle}>Technologies I've managed</h2>
                    <p className={style.bioText}>Code &amp; Databases</p>
                    <div className={style.techGrid}>
                        <Technologies image="python" name="Python" color="#4081B3" />
                        <Technologies image="nodejs" name="NodeJS" color="#84ce24" />
                        <Technologies image="laravel" name="Laravel" color="#e32628" />
                        <Technologies image="fastapi" name="FastAPI" color="#05998B" />
                        <Technologies image="react" name="React" color="#4cbddc" />
                        <Technologies image="typescript" name="TypeScript" color="#007acc" />
                        <Technologies image="bootstrap" name="Bootstrap" color="#8809fb" />
                        <Technologies image="tailwind" name="Tailwind" color="#35BEF8" />
                        <Technologies image="mysql" name="MySQL" color="#d18434" />
                        <Technologies image="postgres" name="Postgres" color="#2F6792" />
                        <Technologies image="docker" name="Docker" color="#079CEC" />
                        <Technologies image="angular" name="Angular" color="#D70230" />
                    </div>
                </div>

                <hr/>

                {/* Projects */}
                <div id="projects" ref={el => sectionRefs.current["projects"] = el} className={style.section}>
                    <h2 className={style.sectionTitle}>My Projects</h2>
                    <p className={style.bioText}>A little bit of my tech skills</p>
                    <div className={style.projectsGrid}>
                        <Project
                            img={CVReader}
                            title="CV Reader"
                            description="A CV Reader application that helps you manage and analyze resumes efficiently with IA."
                            app_url="https://cv-reader-app.up.railway.app/"
                        >
                            <Technologies image="react" name="ReactJS" color="#4cbddc" />
                            <Technologies image="fastapi" name="FastAPI" color="#05998B" />
                        </Project>
                    </div>
                </div>
            </div>
        </div>
    );
}
