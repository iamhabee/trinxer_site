import React, { useContext } from 'react';
import UserContext from '../../context';

function HomeAboutFeatures() {
    const data = useContext(UserContext)
    const {settings} = data
    return (
        <div id="features" className="wrapper spacer">
            <div className="row gutter-width-md with-pb-lg">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="feature-item">
                        <h2>Our Values</h2>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="feature-item">
                        <h4>Mission</h4>
                        <p>{settings.mission}</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="feature-item">
                        <h4>Vision</h4>
                        <p>{settings.vision}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutFeatures;
