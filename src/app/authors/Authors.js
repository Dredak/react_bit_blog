import React from 'react';
import { Link } from 'react-router-dom';
import fetchAuthors from '../../services/fetchAuthors';
import {fetchSingleAuthorNumPosts} from '../../services/fetchSingleAuthorPosts';

class Authors extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            numOfPosts: []   
    }
}

    onLoadAuthors(){
        fetchAuthors()
        .then((fetchedAuthors) => {
            this.setState({authors:fetchedAuthors})
            fetchedAuthors.map()
        }) 
    }
    
    componentDidMount(){
        this.onLoadAuthors();
    }

    onLoadNumOfPosts(id){
        fetchSingleAuthorNumPosts(id)
        .then((numOfPosts)=>{
            this.setState({numOfPosts: numOfPosts})
        })
    }

    render() {

        if (!this.state.authors.length){
            return <p>Loading....</p>
        }

        const listOfAuthors = this.state.authors.map((author)=>{
            const{name, id} = author;
            return <Link to={`/singleAuthorPage/${id}`} key={id}><h4>{name} - </h4></Link>
        })

        return (
            <>
                <h2>Authors({this.state.authors.length})</h2>
                {listOfAuthors}
            </>
        )
    }
}
export default Authors;
