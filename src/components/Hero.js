import HeroImage from "../images/Group 77.png"

export default function Hero(){
    return(
        <div className="hero">
            <img src={HeroImage} className="heroImage"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}