
export default function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "online"){
        badgeText ="ONLINE"
    }


    return(
        <div className="cards">
            <div className="card-container">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.item.img}/>
                    <div className="details">
                        <img src={props.item.star} />
                        <p>{props.item.rating}</p>
                        <p>{props.item.people}</p>
                        <div></div>
                        <p>{props.item.location}</p>
                    </div>
                    <p className="about">{props.item.topic}</p>
                    <p className="about"><span className="amount"></span>{props.item.amount} / person</p>              
            </div>
        </div>
    )
}