import React from 'react';

const FunFacts = () => {
    return (
        <div id="fun-facts" className="block bg-primary bg-text-tertiary-color spacer p-top-lg p-bottom-lg fun-facts-width-img" style={ { backgroundImage: `url('assets/img/placeholder/1920x288.png')` } }>
            <div className="wrapper">
                <div className="row gutter-width-md fun-fact-items">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div className="fun-fact">
                            <p className="fun-fact-t-head">10 +</p>
                            <p className="fun-fact-description">Great Dentists</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div className="fun-fact">
                            <p className="fun-fact-t-head">50 +</p>
                            <p className="fun-fact-description">Dental Services</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div className="fun-fact">
                            <p className="fun-fact-t-head">100 +</p>
                            <p className="fun-fact-description">Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 align-self-center">
                        <div className="fun-fact">
                            <p className="fun-fact-t-head">15 +</p>
                            <p className="fun-fact-description">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFacts;
