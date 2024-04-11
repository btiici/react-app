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
                item={item}
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