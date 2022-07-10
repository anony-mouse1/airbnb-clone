import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./styles.css"


export default function App() {
            // <Hero /> 
    const cards = data.map(eachCard => {
        return (
            <Card
            key = {eachCard.id} 
            eachCard = {eachCard}
            // img={eachCard.coverImg} 
            // rating={eachCard.stats.rating}
            // reviewCount={eachCard.stats.reviewCount}
            // location={eachCard.location}
            // title={eachCard.title}
            // price={eachCard.price}
            // openSpots={eachCard.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar />
            < Hero />
            <section className="cards-list">
            {cards}
            </section>
        </div>
    )
}