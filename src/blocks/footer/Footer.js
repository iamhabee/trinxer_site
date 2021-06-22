import React from 'react';

import BackToTop from '../../components/back-to-top/BackToTop';

import Copyright from '../footer/Copyright';
import FooterMenu from '../footer/FooterMenu';
import FooterLogo from '../footer/FooterLogo';

const Footer = () => {
    return (
        <footer id="footer" className="site-footer">
            <div className="wrapper">
                <BackToTop />
                
                <div className="footer">
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between">
                        <div className="align-self-center">
                            <FooterLogo />
                        </div>

                        <div className="align-self-center">
                            <Copyright />
                        </div>

                        <div className="align-self-center">
                           <FooterMenu />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
