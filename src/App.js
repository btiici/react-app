import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import cardData from "./cardData.js";
import Card from "./components/Card";

export default function App(){
    const cardElements = cardData.map((item) => {
        return (
            <Card
                    img={item.img}
                    star={item.star}
                    rating={item.rating}
                    people={item.people}
                    country={item.country}
                    topic={item.topic}
                    amount={item.amount} 
            />
        )
    })
    
    return(
        <div>
            <Nav />
            <Hero />
            <Card />
            {cardElements}
        </div>
    )
}