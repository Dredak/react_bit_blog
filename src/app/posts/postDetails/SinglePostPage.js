import React from 'react';
import { Link } from 'react-router-dom';
import fetchPost from '../../../services/fetchPost';
import fetchUser from '../../../services/fetchUser';


class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            user: {}
        }
    }

    onLoadPost() {
        fetchPost(this.props.match.params.broj)
            .then((fetchedPost) => {
                this.setState({ post: fetchedPost })
                this.onLoadUser();
            })
    }
    onLoadUser() {
        console.log(this.state.post.userId)
        fetchUser(this.state.post.userId)
            .then((fetchedUser) => {
                this.setState({ user: fetchedUser })
            })
    }

    componentDidMount() {
        this.onLoadPost();     
    }

    render() {
        const { id, title, body } = this.state.post;
        const { name } = this.state.user;

        return (
            <>
                <h4>{title}{id}</h4>
                <Link to="/singleAuthorPage"><p>{name}</p></Link>
                <p>{body}</p>
                <hr />

                <h5>3 more posts from same author</h5>
                <ul>
                    <Link><p>First</p></Link>
                    <Link><p>Second</p></Link>
                    <Link><p>Third</p></Link>
                </ul>
            </>
        )
    }
}

export default SinglePostPage;