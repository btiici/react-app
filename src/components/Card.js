
export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "online"){
        badgeText ="ONLINE"
    }


    return(
        <div className="cards">
            <div className="card-container">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.img}/>
                    <div className="details">
                        <img src={props.star} />
                        <p>{props.rating}</p>
                        <p>{props.people}</p>
                        <div></div>
                        <p>{props.location}</p>
                    </div>
                    <p className="about">{props.topic}</p>
                    <p className="about"><span className="amount"></span>{props.amount} / person</p>              
            </div>
        </div>
    )
}