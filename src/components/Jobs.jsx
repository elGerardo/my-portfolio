import style from "./Jobs.module.css";

const Jobs = ({ image, jobTitle, title, description }) => {
  return (
    <div
      className={`${style.content} rounded p-3 mb-3 d-flex align-items-center`}
    >
      <img
        className={`rounded-circle mx-5`}
        src={`./images/jobs/${image}.jpg`}
      />
      <div>
        <p>
          <b>{jobTitle}</b> {title}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Jobs;
