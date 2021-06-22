import React, { Fragment, useContext, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNews from '../blocks/page-title/PageTitleNews';
import NewsImg from '../blocks/news/NewsImg';
import NewsMeta from '../blocks/news/NewsMeta';
import NewsDescription from '../blocks/news/NewsDescription';
// import NewsTags from '../blocks/news/NewsTags';
import NewsComments from '../blocks/news/NewsComments';
import Widget from '../blocks/widget/Widget';
import { useParams } from 'react-router-dom';
import UserContext from '../context';
import { fetchSingleBlog, increaseBlogView } from '../services';

const NewsSinglePost = () => {
    document.body.classList.add( 'single-post' );

    const data = useContext(UserContext)
    const {getSingleBlog, singleBlog} = data
    const {id} = useParams()
    useEffect(() => {
        fetchSingleBlog(id).then((blogs) => {
            if(blogs && blogs.status){
                getSingleBlog(blogs.data)
                increaseBlogView(id)
            }
        })
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News single post | Trinxer - Pharmaceuticals </title>

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

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 single-content">
                                        <NewsImg />

                                        <NewsMeta />

                                        <div className="title">
                                            <h2>{singleBlog.postTitle}</h2>
                                        </div>

                                        <NewsDescription />

                                        {/* <NewsTags />  */}

                                        <NewsComments />
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

export default NewsSinglePost;
