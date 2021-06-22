import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import HomeHeader from '../blocks/header/HomeHeader';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import HomeInfo from '../blocks/home/HomeInfo';
import AboutsUs from '../blocks/home/AboutsUs';
import HomeServices from '../blocks/home/HomeServices';
// import FunFacts from '../blocks/home/FunFacts';
import OurTeam from '../blocks/home/OurTeam';
import HomeNews from '../blocks/home/HomeNews';
// import Testimonials from '../blocks/home/Testimonials';
import ContactsUs from "../blocks/home/ContactsUs";
// import GoogleMaps from "../blocks/maps/GoogleMaps";
// import UserContext from '../context';

const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );
    document.body.classList.add( 'header-fixed-true' );
    
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Trinxer - Pharmaceuticals </title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <HomeHeader />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <HomeInfo />

                        <AboutsUs />

                        <HomeServices />

                        {/* <FunFacts /> */}

                        <OurTeam />

                        {/* <Testimonials /> */}

                        <HomeNews />

                        <ContactsUs />

                        {/* <GoogleMaps /> */}
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
