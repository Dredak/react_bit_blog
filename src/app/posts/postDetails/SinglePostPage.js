import React from 'react';
import { Link } from 'react-router-dom';
import fetchPost from '../../../services/fetchPost';
import fetchAuthor from '../../../services/fetchAuthor';
import {fetchSingleAuthorPosts} from '../../../services/fetchSingleAuthorPosts';
import textTrim from './../../../services/textTrim';


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            author: {},
            authorPosts: []
        }
    }

    onLoadPost() {
        fetchPost(this.props.match.params.id)
            .then((fetchedPost) => {
                this.setState({ post: fetchedPost })
                this.onLoadAuthor(fetchedPost.userId);
                this.onLoadSingleAuthorPosts(fetchedPost.userId);
            })
    }

    onLoadAuthor(id) {
        fetchAuthor(id)
            .then((fetchedAuthor) => {
                this.setState({ author: fetchedAuthor })
            })
    }

    onLoadSingleAuthorPosts(id) {
        fetchSingleAuthorPosts(id)
            .then((listOfPosts) => {
                this.setState({ authorPosts: listOfPosts })
            })
    }

    componentDidMount() {
        this.onLoadPost();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.onLoadPost()
        }
    }

    render() {

        const { title, body, userId } = this.state.post;
        const { name } = this.state.author;
        const threePosts = this.state.authorPosts.map((post) => {
            const { authorTitle, postId, authorBody } = post;
            return <li className="single-post-card" key={postId}><Link to={`/singlePostPage/${postId}`}>{authorTitle} {postId} - {textTrim(authorBody)}</Link></li>
        });


        return (
            <div className="single-post-wrapper">
                <Link to="/">&lt;Back</Link>
                <h4 className="single-post-title">{title}</h4>
                <Link to={`/singleAuthorPage/${userId}`} className="single-post-author">{name}</Link>
                <p className="single-post-content">{body}</p>
                <hr />
                <h5>3 more posts from same author</h5>
                <ul>
                    {threePosts}
                </ul>
            </div>
        )
    }
}

export default SinglePostPage;