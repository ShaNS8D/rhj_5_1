const Card = (props) => {
    return (
        <div className="card w-25" >
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.path} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;