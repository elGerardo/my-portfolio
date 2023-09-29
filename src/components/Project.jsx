import style from "./Project.module.css";
import React from "/images/tec_logos/react.png";
import Github from "/images/github.png";
let Project = ({title, description, app_url, img, children, github_url}) => {
  let content = (
    <div className={`${style.content} d-inline-block p-3 align-middle shadow rounded`}>
      <img className={`rounded w-100`} src={img} />
      <h2 className={`m-3`}>{title}</h2>
      <p className={`mx-3`}>{description}</p>
      {children}
      <hr />
      <div className={`d-flex my-2 justify-content-around`}>
        <a href={`${app_url}`} className={`m-3`} target="_blank" rel="noopener noreferrer">
          Go To {title}
        </a>
        <a className={`${style.github_url}`} href={`${github_url}`} target="_blank" rel="noopener noreferrer">
          <img src={Github} className={`m-3`} />Go To Repo
        </a>
      </div>
    </div>
  );
  return content;
};

export default Project;
