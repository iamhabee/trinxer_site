import React, { useContext } from 'react';
import UserContext from '../../context';

const NewsMeta = () => {
    const data = useContext(UserContext)
    const {singleBlog} = data
    return (
        <div className="meta">
            <p>
                <span><a href={ process.env.PUBLIC_URL + "/news" }>By admin</a></span>
                <span>-</span>
                <span>Comments ({singleBlog.Comments && singleBlog.Comments.length})</span>
                {/* <span>-</span>
                <span className="category"><a title="General dentist" href={ process.env.PUBLIC_URL + "/news" }>General dentist</a></span> */}
            </p>
        </div>
    );
};

export default NewsMeta;
