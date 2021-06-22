import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import CommentsReply from '../../components/button/CommentsReply';
import CommentForm from '../../components/form/CommentForm';
import UserContext from '../../context';

const NewsComments = () => {
    const data = useContext(UserContext)
    const {singleBlog} = data
    const {id} = useParams()
    return (
        <div id="comments" className="comments-area spacer m-top-xl">
            <div className="comment-title">
                <h3>{singleBlog.Comments && singleBlog.Comments.length} Comment</h3>
            </div>

            <ul className="comment-list list-unstyled style-default">
            {singleBlog.Comments && singleBlog.Comments.map((comment, index)=>(
                <li className="comment" key={index}>
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-content">
                                <div className="comment-content-left">
                                    <div className="comment-img">
                                        <img src="/assets/img/placeholder/dummy.jpg" alt="trinxer" />
                                    </div>
                                </div>

                                <div className="comment-content-right">
                                    <h5 className="comment-author after">
                                        <a href="#" title={comment.fullName}>{comment.fullName}</a>
                                    </h5>

                                    <div className="comment-time">
                                        <p>{new Date(comment.createdAt).toDateString()}</p>
                                    </div>

                                    <div className="comment-description">
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>))}
            </ul>
            <CommentsReply />

            <div className="block spacer m-top-xl">
                <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">Leave a reply <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link border-0 p-0 min-w-auto link-no-space" href={ process.env.PUBLIC_URL + "/blog-single-post" } style={ { display: "none" } }>Cancel reply</a></h3>

                    <CommentForm id={id}/>
                </div>
            </div>
        </div>
    );
};

export default NewsComments;
