import React, { useContext } from 'react';
import UserContext from '../../context';
import { imageUrl } from '../../services';

const HomeAboutImg = () => {
    const data = useContext(UserContext)
    const {settings} = data
    return (
        <div id="about-img" className="spacer p-top-sm">
            <div className="img-size-1">
                <div className="img object-fit">
                    <div className="object-fit-cover">
                        <img src={`${imageUrl}settings/${settings.aboutImagePath}`} alt="IMG" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutImg;
