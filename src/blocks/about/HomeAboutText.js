import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import UserContext from '../../context';

const HomeAboutText = () => {
    const data = useContext(UserContext)
    const {settings} = data
    return (
        <div id="about-text" className="wrapper">
            <div className="row gutter-width-md with-pb-md">
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="description-2">
                        <h2>We provide the best service, Because we care about your health</h2>
                    </div>

                    <div className="signature spacer m-top-lg">
                        <div className="signature-img">
                            <img src="assets/img/demo/02_img.png" alt="Signature" />
                        </div>

                        <div className="signature-content">
                            <h5 className="signature-name">{settings.contactName}</h5>
                            <p className="signature-position">C E O</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div className="description-2">
                        <p>{settings.aboutUs}</p>
                    </div>

                    {/* <div className="description-2 spacer p-top-lg">
                        <p>{It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.}</p>
                    </div> */}

                    <div className="button spacer p-top-lg">
                        <Link to="services" href="#services" className="btn btn-primary scroll-to-id">See Our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutText;
