let Technologies = (props) => {

    let content = (
        <div className={`d-inline-block align-middle mx-2 my-2`}>
            <div className={`d-flex justify-content-center p-2 rounded align-items-center position-relative`} style={{border:`1px solid ${props.color}`}}>
                <img className={`mx-2`} src={props.image} />
                <p className={`align-middle mx-3`}>{props.name}</p>
            </div>
        </div>
    );

    return content;

}

export default Technologies;