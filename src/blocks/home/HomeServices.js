import React from 'react';

import Accordion1 from '../services/Accordion1';
import Accordion2 from '../services/Accordion2';

const HomeServices = () => {
    return (
        <section id="services" className="block bg-gray-light spacer p-top-xl p-bottom-xl">
            <div className="wrapper">
                <div className="title text-max-width">
                    <h2>We Promise an Excellent Dental Care and Provide These Services</h2>
                </div>

                <div className="description">
                    <p>It has survived not only five centuries.</p>
                </div>

                <div className="row gutter-width-md with-pb-xs spacer m-top-xs">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Accordion1 />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <Accordion2 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
