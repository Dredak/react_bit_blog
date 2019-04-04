import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {

    const { id, title, body } = props;

    return (
        <div class="row">
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title"><Link to={`/singlePostPage/${id}`}>{title} {id}</Link></span>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;