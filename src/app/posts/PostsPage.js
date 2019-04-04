import React from 'react';
import PostItem from './PostItem';
import fetchPosts from './../../services/fetchPosts';

class PostsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    onLoadPosts() {
        fetchPosts().then((fetchedPosts) => {
            this.setState({ posts: fetchedPosts })
        })
    }
    componentDidMount() {
        this.onLoadPosts();
    }

    render() {

        const { posts } = this.state;

        const mappedPosts = posts.map((user) => {
            const { title, body, id } = user;
            return <PostItem title={title} body={body} id={id} key={id} />
        })
        if (!mappedPosts) {
            return <h2>Loading...</h2>
        }
        return (
            <>
                <h4 className="center">Posts</h4>
                {mappedPosts}
            </>
        );
    }

}

export default PostsPage;