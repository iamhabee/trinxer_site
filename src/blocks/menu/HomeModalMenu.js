import React from 'react';
import { Link } from 'react-scroll';

const HomeModalMenu = ( props ) => {
    return (
        <nav className="menu-primary">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link onClick={ props.action } to="about-us" title="About Us" href="#about-us" smooth={true} duration={700}>About Us</Link>
                </li>

                <li className="nav-item">
                    <Link onClick={ props.action } to="services" title="Services" href="#services" smooth={true} duration={700}>Services</Link>
                </li>

                <li className="nav-item">
                    <Link onClick={ props.action } to="our-team" title="Our Teams" href="#our-team" smooth={true} duration={700}>Our Team</Link>
                </li>

                <li className="nav-item">
                    <Link onClick={ props.action } to="news" title="News" href="#news" smooth={true} duration={700}>News</Link>
                </li>

                <li className="nav-item">
                    <Link onClick={ props.action } to="contacts" title="Contacts" href="#contacts" smooth={true} duration={700}>Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HomeModalMenu;
