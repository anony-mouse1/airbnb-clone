import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.location === "Online") {
        badgeText="ONLINE"
    }

    return (
        <div className="card">
            {badgeText &&  <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.eachCard.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" />
                <span>{props.eachCard.stats.rating}</span>
                <span className="gray">({props.eachCard.stats.reviewCount}) • </span>
                <span className="gray">{props.eachCard.location}</span>
            </div>
            <p className="card--title">{props.eachCard.title}</p>
            <p className="card--price"><span className="bold">From ${props.eachCard.price}</span> / person</p>
        </div>
    )
    
}