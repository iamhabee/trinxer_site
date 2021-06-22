import React from 'react';

import RecentCommentsData from '../../data/widget/recentComments.json';

const WidgetComments = () => {
    return (
        <div className="widget widget_recent_comments">
            <h6 className="widget-title">Recent Comments</h6>

            <ul id="recentcomments">
                { RecentCommentsData && RecentCommentsData.map( ( item, key ) => {
                    return(
                        <li key={ key } className="recentcomments">
                            <span className="comment-author-link">{ item.author }</span> on
                            <a title={ item.author } href={ process.env.PUBLIC_URL + item.link }>{ item.comment }</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WidgetComments;
