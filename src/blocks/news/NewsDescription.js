import React, { useContext } from 'react';
import UserContext from '../../context';

const NewsDescription = () => {
    const data = useContext(UserContext)
    const {singleBlog} = data
    return (
        <div className="description clearfix">
            <p dangerouslySetInnerHTML={{ __html:singleBlog.postContent }}/>
        </div>
    );
};

export default NewsDescription;
