import React from 'react';

import TagsData from '../../data/news/newsTagsData.json';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                { TagsData && TagsData.map( ( tag, key ) => {
                    return (
                        <a key={ key } title={ tag.title } href={ process.env.PUBLIC_URL + tag.link }>{ tag.title }</a>
                    );
                })}
            </p>
        </div>
    );
};

export default NewsTags;
