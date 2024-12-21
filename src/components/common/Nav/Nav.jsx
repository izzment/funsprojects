import React from 'react';
import './Nav.css';
import userImg from '../../../img/usericon - admin.jpeg';
import {Link} from "react-router-dom";


export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <Link to='/' className='logo-container text-xl font-bold'>
                    <h1 className="logo">HR<span>Acme</span></h1>
                </Link>
                <div className="search-bar">
                <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="nav-sidebar">
                    <div className='nav-icons'>
                        <p>Admin Panel </p>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <img src={userImg} alt="user avatar"/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
