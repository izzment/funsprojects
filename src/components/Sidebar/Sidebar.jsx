import React, {useState} from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

export const Sidebar = ({icon, darkicon, title, href}) => {

    const [currentImage, setCurrentImage] = useState(icon);

    return (
        <Link key={href} to={href}>
            <li className="main-sidebar-item" onMouseOver={() => setCurrentImage(darkicon)}
                onMouseOut={() => setCurrentImage(icon)}>
                <img className="main-sidebar-img" src={currentImage}/>
                <p className="main-sidebar-title">{title} </p>
            </li>
        </Link>

    );
}