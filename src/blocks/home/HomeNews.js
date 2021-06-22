import React, { useContext } from 'react';
import UserContext from '../../context';
// import { Link } from 'react-router-dom';
// import HomeNewsItems from '../../data/news/newsHomeItems.json';
import { getMonth, imageUrl } from '../../services';

const HomeNews = () => {
    const data = useContext(UserContext)
    const {blogs} = data

    
    return (
        <section id="news" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2>Check Our Latest News Posts</h2>
                </div>

                <div className="blog-shortcode">
                    <div className="row gutter-width-md with-pb-md">
                        { blogs && blogs.slice(0, 6).map( ( item, key ) => {
                            const currDate = new Date(item.createdAt)
                            return(
                                <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-post">
                                        <div className="card-top position-relative">
                                            {/* <Link title={ item.postTitle } to={`/news-single-post/${item.blogPostId}`}> */}
                                            <a title={ item.postTitle } href={`/news-single-post/${item.blogPostId}`}>
                                                <div className="img object-fit overflow-hidden">
                                                    <div className="object-fit-cover transform-scale-h">
                                                        <img className="card-top-img" src={`${imageUrl}blog/${item.imagePath}`} alt={ item.postTitle } />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* </Link> */}
        
                                            <div className="post-date">
                                                <div className="post-date-0">
                                                    <p><span className="post-date-number">{ currDate.getDate() }</span>{ getMonth(currDate.getMonth()) }</p>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a title={ item.postTitle } href={ process.env.PUBLIC_URL + item.link }>{ item.postTitle }</a>
                                            </h5>
        
                                            <p className="card-text" >{item.description && item.description.slice(0, 30)}...</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="spacer m-top-lg text-right">
                    <a title="View all news" className="btn btn-primary" href={ process.env.PUBLIC_URL + "/news" }>View All Posts</a>
                </div>
            </div>
        </section>
    );
};

export default HomeNews;
