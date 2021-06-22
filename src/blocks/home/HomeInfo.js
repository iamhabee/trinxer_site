import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import UserContext from '../../context';

const HomeInfo = () => {
    const data = useContext(UserContext)
    const {settings} = data
    return (
        <section id="information" className="block">
            <div className="wrapper">
                <div className="row no-gutters information-items">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="information information-color-1">
                            <div className="information-icon">
                                <i className="hosco-icon-call-2"></i>
                            </div>

                            <h4 className="information-t-head">Emergency Call</h4>

                            <div className="information-description">
                                <p>{settings.contactName}</p>
                                <p>{settings.contactPhone}</p>
                            </div>

                            <div className="information-btn">
                                <a title="Call us now" className="btn btn-sm btn-link btn-line p-0 border-0 min-w-auto link-no-space text-uppercase" href={`tel:${settings.contactPhone}`}>Call us now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="information information-color-2 information-icon-margin">
                            <div className="information-icon">
                                <i className="hosco-icon-dental-care"></i>
                            </div>

                            <h4 className="information-t-head">Where Are We?</h4>

                            <div className="information-description">
                                <p>{settings.contactAddress}</p>
                            </div>

                            <div className="information-btn">
                                <Link to="google-maps" title="See on map" className="btn btn-sm btn-link btn-line p-0 border-0 min-w-auto link-no-space text-uppercase scroll-to-id" href="#google-maps">See on map</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="information information-color-3">
                            <div className="information-icon">
                                <i className="hosco-icon-calendar"></i>
                            </div>

                            <h4 className="information-t-head">Opening Hours</h4>

                            <div className="information-description">
                                <p><span className="d-flex justify-content-between flex-wrap"><span>Mon - Fri:</span><span className="text-right">8:00am - 7:00pm</span></span></p>
                                <p><span className="d-flex justify-content-between flex-wrap"><span>Saturday:</span><span className="text-right">9:00am - 6:00pm</span></span></p>
                                <p><span className="d-flex justify-content-between flex-wrap"><span>Sunday:</span><span className="text-right">Closed</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;
