import React from 'react';
import './SubServices.css';

// Import images
import img6 from '../../img/Imagesfun/6.png';
import img7 from '../../img/Imagesfun/7.png';
import img8 from '../../img/Imagesfun/8.png';
import img9 from '../../img/Imagesfun/9.png';
import img10 from '../../img/Imagesfun/10.png';
import img11 from '../../img/Imagesfun/11.png';
import img12 from '../../img/Imagesfun/12.png';
import img13 from '../../img/Imagesfun/13.png';
import img14 from '../../img/Imagesfun/14.png';
import img15 from '../../img/Imagesfun/15.png';
import img16 from '../../img/Imagesfun/16.png';
import img18 from '../../img/Imagesfun/18.png';
import {Link} from "react-router-dom";

// Array of small services
const littleServices = [
    { title: 'Tasks', icon: img6, href: '/tasks' },
    { title: 'FAQs', icon: img7, href: '/frequently-asked-questions' },
    { title: 'Birthdays', icon: img8, href: '/birthdays' },
    { title: 'Favourite', icon: img9, href: '/favourites' },
    { title: 'Company parties', icon: img10, href: '/company-parties' },
    { title: 'Schedule', icon: img11, href: '/schedule' },
    { title: 'Goals', icon: img12, href: '/goals' },
    { title: 'Timelogs', icon: img13, href: '/timelogs' },
    { title: 'Folders', icon: img14, href: '/folders' },
    { title: 'Employees', icon: img15, href: '/employees' },
    { title: 'Notifications', icon: img16, href: '/notifications' },
    { title: 'News', icon: img18, href: '/news' },
];

const Subservices = () => {
    return (
        <div className="small-services">
            {littleServices.map((service, index) => (
                <Link key={index} to={service.href} className="small-card">

                        {/* Service Icon */}
                        <img src={service.icon} alt={service.title} className="service-icon"/>
                        {/* Service Title */}
                        <h4 className="text--s">{service.title}</h4>

                </Link>
            ))}
        </div>
    );
};

export default Subservices;
