


export default function Card(props){
    return(
        <div className="Cards">
            <div className="card-container">
                <img src={props.img}/>
                    <div className="details">
                        <img src={props.star} />
                        <p>{props.rating}</p>
                        <p>{props.people}</p>
                        <div></div>
                        <p>{props.country}</p>
                    </div>
                    <p className="about">{props.topic}</p>
                    <p className="about"><span className="amount"></span>{props.amount} / person</p>              
            </div>
        </div>
    )
}