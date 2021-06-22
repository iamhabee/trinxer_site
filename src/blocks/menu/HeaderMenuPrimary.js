import React from 'react';

const HeaderMenuPrimary = () => {
    return (
        <nav className="menu-primary">
            <ul className="nav">
                <li className="nav-item">
                    <a title="About Us" href={ process.env.PUBLIC_URL + "/#about-us" }>About Us</a>
                </li>

                <li className="nav-item">
                    <a title="Services" href={ process.env.PUBLIC_URL + "/#services" }>Services</a>
                </li>

                <li className="nav-item">
                    <a title="Our Teams" href={ process.env.PUBLIC_URL + "/#our-team" }>Our Team</a>
                </li>

                <li className="nav-item">
                    <a title="Testimonials" href={ process.env.PUBLIC_URL + "/#testimonials" }>Testimonials</a>
                </li>

                <li className={ "nav-item " + ( window.location.pathname.includes( "/news" ) || window.location.pathname.includes( "/news-single-page" )? "current-nav-item" : "" ) }>
                    <a title="News" href={ process.env.PUBLIC_URL + "/news" }>News</a>
                </li>

                <li className="nav-item">
                    <a title="Contacts" href={ process.env.PUBLIC_URL + "/#contacts" }>Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenuPrimary;
