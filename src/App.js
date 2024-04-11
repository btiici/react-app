import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import cardData from "./cardData.js";
import Card from "./components/Card";

export default function App(){
    const cardElements = cardData.map((item) => {
        return (
            <Card
                    key={item.id}
                    img={item.img}
                    star={item.star}
                    rating={item.rating}
                    people={item.people}
                    location={item.location}
                    topic={item.topic}
                    amount={item.amount} 
                    openSpots ={item.openSpots}

            />
        )
    })
    
    return(
        <div>
            <Nav />
            <Hero />
            <div className="cards">
            {cardElements}
            </div>
        </div>
    )
}