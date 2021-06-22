import React, { Fragment, useContext, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNews from '../blocks/page-title/PageTitleNews';
import Widget from '../blocks/widget/Widget';
import LoadMore from '../components/loadmore/LoadMore';

// import NewsItemsData from '../data/news/newsItems';
import { fetchBlogs, getMonth, imageUrl } from '../services';
import UserContext from '../context';

const News = () => {
    document.body.classList.add( 'blog' );
    const data = useContext(UserContext)
    const {setBlogs, blogs} = data
    useEffect(() => {
        (async () => {
        const blogs = await fetchBlogs({offset:0, limit:10})
            if(blogs && blogs.status){
                setBlogs(blogs.data)
            }
        })()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News | Trinxer - Pharmaceuticals </title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />
            
            <Header />

            <main id="main" className="site-main">
                <PageTitleNews />

                <div id="page-content" className="spacer">
                    <div className="wrapper">
                        <div className="content">
                            <div id="blog">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                        <div className="row gutter-width-md with-pb-lg">
                                            { blogs && blogs.map ( ( item, key ) => {
                                                const currDate = new Date(item.createdAt)
                                                return(
                                                    <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="card card-post">
                                                            <div className="card-top position-relative">
                                                                <a title={ item.title } href={`/news-single-post/${item.blogPostId}`}>
                                                                    <div className="img object-fit overflow-hidden">
                                                                        <div className="object-fit-cover transform-scale-h">
                                                                            <img className="card-top-img" src={`${imageUrl}blog/${item.imagePath}`} alt={ item.title } />
                                                                        </div>
                                                                    </div>
                                                                </a>

                                                                <div className="post-date">
                                                                    <div className="post-date-0">
                                                                        <p><span className="post-date-number">{ currDate.getDate() }</span>{ getMonth(currDate.getMonth()) }</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    <a title={ item.postTitle } href={`/news-single-post/${item.blogPostId}`}>{ item.postTitle }</a>
                                                                </h5>

                                                                <p className="card-text">{ item.description.slice(0, 100) }...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {blogs.length > 0 && <LoadMore />}
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Widget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default News;
