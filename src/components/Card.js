function Card(props) {
    return (

        <div class="mr">
            <img src={props.imgsrc}
                alt="Card demo"
                width="10%"
                height="250"
            />
            <div>
                <h3>{props.title}</h3>
                <p>{props.sname}</p>
                <a href={props.link} class="btn btn-primary stretched-link">
                    <button>Watch Now</button>
                </a>
            </div>
            <hr /><br />
        </div>

    );
}

export default Card;