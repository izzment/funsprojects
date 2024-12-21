import React from 'react';
import './MainServices.css';
// Importing images directly for better path resolution
import img1 from '../../img/Imagesfun/1.png';
import img2 from '../../img/Imagesfun/2.png';
import img3 from '../../img/Imagesfun/3.png';
import img4 from '../../img/Imagesfun/4.png';
import img17 from '../../img/Imagesfun/17.png';
import {Link} from "react-router-dom";
const bigservices = [
    { title: 'Home', count: 14, backimage: img1, href:'/' },
    { title: 'Calendar', count: 5, backimage: img2, href: '/calendar' },
    { title: 'Files', count: 21, backimage: img3, href: '/files' },
    { title: 'Companies', count: 17, backimage: img4, href: '/companies' },
];

const MainServices = () => {
    return (
        <div className="big-services">
            {bigservices.map((service, index) => (
                <Link to={service.href}>
                    <div
                        key={index}
                        className="big-card"
                        style={{backgroundImage: `url(${service.backimage})`}}
                    >
                        <h3 className="text--1">{service.title}</h3>
                        <span className="count--1">
                        {service.count} {''}
                            <img src={img17} className="notify--icon"/>
                    </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MainServices;
