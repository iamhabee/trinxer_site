import React, { useContext } from 'react';
import UserContext from '../../context';

const PageTitleNews = () => {
    const data = useContext(UserContext)
    const {singleBlog} = data
    return (
        <div id="page-title">
            <div className="wrapper">
                <div className="title">
                    <h1 className="large">Our News</h1>
                </div>

                <div className="description spacer p-top-lg text-max-width-2">
                    <p>{singleBlog.postTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageTitleNews;
