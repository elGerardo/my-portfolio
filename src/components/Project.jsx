import style from "./Project.module.css";
import React from "../assets/images/tec_logos/react.png";
import Github from "../assets/images/github.png";
let Project = (props) => {
  let content = (
    <div className={`${style.content} d-inline-block p-3 align-middle shadow rounded`}>
      <img className={`rounded w-100`} src={props.img} />
      <h2 className={`m-3`}>{props.title}</h2>
      <p className={`mx-3`}>{props.description}</p>
      {props.children}
      <hr />
      <div className={`d-flex my-2 justify-content-around`}>
        <a href={`${props.app_url}`} className={`m-3`} target="_blank" rel="noopener noreferrer">
          Go To {props.title}
        </a>
        <a className={`${style.github_url}`} href={`${props.github_url}`} target="_blank" rel="noopener noreferrer">
          <img src={Github} className={`m-3`} />Go To Repo
        </a>
      </div>
    </div>
  );
  return content;
};

export default Project;
