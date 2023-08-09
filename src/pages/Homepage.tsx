import "../css/homepage.css"
import portfolioCenterImage from "../assets/portfolioCenterImage.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconList } from "../data/icon_list"
import { useState } from "react";

export default function Homepage() {
    const [hovered, setHovered] = useState<number>(-1);
    return (
        <>
            <div className="heroImageContainer">
                <img src={portfolioCenterImage} className="heroImage" />
            </div>
            {iconList.map(({ iconName, x, y }, index) => (
                <FontAwesomeIcon icon={iconName} size="2x" style={{ top: `${y}vh`, left: `calc(${x}vw - 16px)`, animationDelay: `${Math.random()}s` }} key={`icon_${index}`} className="iconPosition iconAnimation" />
            ))}
        </>
    )
}