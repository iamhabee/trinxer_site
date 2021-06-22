import React from 'react';
import { Link } from 'react-scroll';

const CommentsReply = () => {
    return (
        <div className="comment-reply no-space">
            <Link title="Reply" to="reply-title" className="comment-reply-link btn btn-sm btn-link btn-line p-0 border-0 min-w-auto link-no-space text-uppercase scroll-to-id" href="#reply-title">
                Reply
            </Link>
        </div>
    );
};

export default CommentsReply;
