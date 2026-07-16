import style from "./Jobs.module.css";

const Jobs = ({ image, jobTitle, title, description, jobDescription, location = "Tijuana, México" }) => {
  return (
    <div className={style.content}>
      <img className={style.logo} src={`./images/jobs/${image}.jpg`} alt={jobTitle} />
      <div className={style.info}>
        <div className={style.row}>
          <h3 className={style.role}>{description}</h3>
          <span className={style.dates}>{title}</span>
        </div>
        <p className={style.meta}>{location} &nbsp;·&nbsp; {jobTitle}</p>
        {jobDescription && <p className={style.desc}>{jobDescription}</p>}
      </div>
    </div>
  );
};

export default Jobs;

