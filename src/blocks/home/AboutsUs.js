import React from 'react';

import HomeAboutText from '../about/HomeAboutText';
import HomeAboutFeatures from '../about/HomeAboutFeatures';
import HomeAboutImg from '../about/HomeAboutImg';
// import HomeAboutClients from '../about/HomeAboutClients';

const AboutsUs = () => {
    return (
        <section id="about-us" className="block spacer p-top-xl">
            <HomeAboutText />

            <HomeAboutFeatures />

            <HomeAboutImg />

            {/* <HomeAboutClients /> */}
        </section>
    );
};

export default AboutsUs;
