import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {

    const { id, title, body } = props;

    return (
        <div className="post-item">
            <div className="content-wrapper">
                <span className="post-title"><Link to={`/singlePostPage/${id}`}>{title}</Link></span>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostItem;