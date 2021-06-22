import React, { useContext } from 'react';
import UserContext from '../../context';

// import RecentEntries from '../../data/widget/recentEntries';
import { imageUrl } from '../../services';

const WidgetRecentEntries = () => {
    const data = useContext(UserContext)
    const { popularBlog} = data
    return (
        <div className="widget widget_recent_entries">
            <h6 className="widget-title">Recent posts</h6>

            <ul className="list-unstyled items">
                { popularBlog && popularBlog.map( ( item, key ) => {
                    return (
                        <li key={ key } className="item">
                            <div className="row gutter-width-xs">
                                <div className="col-3">
                                    <a href={`/news-single-post/${item.blogPostId}`}>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={`${imageUrl}blog/${item.imagePath}`} alt={ item.postTitle } /> 
                                            </div>
                                        </div>
                                    </a>
                                </div>
                    
                                <div className="col-9 align-self-center">
                                    <p className="item-t-head"><a title={ item.postTitle } href={`/news-single-post/${item.blogPostId}`}>{ item.postTitle }</a></p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WidgetRecentEntries;
