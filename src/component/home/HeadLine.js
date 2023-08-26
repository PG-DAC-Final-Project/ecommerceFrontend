const HeadLine = (props) => {
    return (
        <div>
            <div className="container" style={{ marginBottom: 0 + "px" }}>
                <div className="row fs-2 d-flex justify-content-center">
                    {props.text}
                    <p className="fs-6 text-center">{props.subText}</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <hr className="hrStyle" />
                </div>
            </div>
        </div>
    )
}

export default HeadLine