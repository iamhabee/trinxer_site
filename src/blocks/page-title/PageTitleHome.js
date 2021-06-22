import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import UserContext from '../../context';
import { imageUrl } from '../../services';

const PageTitleHome = () => {
    const data = useContext(UserContext)
    const {settings} = data
    return (
        <section id="page-title" className="block with-img with-information-items" style={ { backgroundImage: `url(${imageUrl}settings/${settings.headerImagePath})` } }>
            <div className="wrapper d-flex">
                <div className="align-self-center w-100">
                    <div className="title">
                        <h1 className="large">{settings.headerCaption}</h1>
                    </div>

                    <div className="description spacer p-top-lg text-max-width">
                        <p>{settings.headerText}</p>
                    </div>

                    <div className="spacer p-top-lg no-space">
                        <Link to="about-us" href="#about-us" className="btn btn-primary scroll-to-id">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="page-title-bg-color"></div>
        </section>
    );
};

export default PageTitleHome;
