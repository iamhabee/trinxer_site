import React, { useContext } from 'react';
import UserContext from '../../context';
import { getMonth, imageUrl } from '../../services';

const  NewsImg = () => {
    const data = useContext(UserContext)
    const {singleBlog} = data
    const currDate = new Date(singleBlog.createdAt)
    return (
        <div className="post-img">
            <div className="img object-fit">
                <div className="object-fit-cover">
                    <img src={`${imageUrl}blog/${singleBlog.imagePath}`} alt="..." />
                </div>
            </div>

            <div className="post-date">
                <div className="post-date-0">
                    {singleBlog.createdAt && <p><span className="post-date-number">{currDate.getDate()}</span>{getMonth(currDate.getMonth())}</p>}
                </div>
            </div>
        </div>
    );
};

export default NewsImg;
