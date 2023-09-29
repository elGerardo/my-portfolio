import style from "./Techonologies.module.css"

let Technologies = ({color, name, image}) => {
    
    let content = (
        <div className={`${style.content} d-inline-block align-middle mx-2 my-2`}>
            <div className={`d-flex justify-content-center p-2 rounded align-items-center position-relative`} style={{border:`1px solid ${color}`}}>
                <img className={`mx-2`} src={`./images/tec_logos/${image}.png`} />
                <p className={`align-middle mx-3`}>{name}</p>
            </div>
        </div>
    );

    return content;

}

export default Technologies;