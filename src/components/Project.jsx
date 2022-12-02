import style from "./Project.module.css";
import React from "../assets/images/tec_logos/react.png";
let Project = (props) => {
  let content = (
    <div className={`${style.content} d-inline-block p-3 align-middle rounded`}>
      <img className={`rounded w-100`} src={props.img} />
      <h2>{props.title}</h2>
      {props.children}
      <div className={`d-flex justify-content-around`}>
        <a href={`${props.app_url}`} target="_blank" rel="noopener noreferrer">
          Go To {props.title}
        </a>
        <a href={`${props.github_url}`} target="_blank" rel="noopener noreferrer">
          Go To Repo
        </a>
      </div>
    </div>
  );
  return content;
};

export default Project;
