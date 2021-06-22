import React, { Fragment, useContext } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleSearch from '../blocks/page-title/PageTitleSearch';

// import SearchItemsData from '../data/search-results/searchItems';
import UserContext from '../context';

const SearchResults = () => {
    const data = useContext(UserContext)
    const {searchBlog, loading} = data
    document.body.classList.add( 'search-results' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Search results | Trinxer - Pharmaceuticals </title>

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
                <PageTitleSearch />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="row gutter-width-md with-pb-lg">
                                { searchBlog && searchBlog.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="card card-post">
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">
                                                        <a title={ item.postTitle } href={`/news-single-post/${item.blogPostId}`}>{ item.postTitle }</a>
                                                    </h5>
        
                                                    <p className="card-text">{ item.description && item.description.slice(0, 100)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default SearchResults;
