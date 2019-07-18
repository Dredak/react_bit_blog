import React from 'react';
import { Link } from 'react-router-dom';
import fetchAuthors from '../../services/fetchAuthors';


class Authors extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: [],  
    }
}

    onLoadAuthors(){
        fetchAuthors()
        .then((fetchedAuthors) => {
            this.setState({authors:fetchedAuthors})
        }) 
    }
    
    componentDidMount(){
        this.onLoadAuthors();
    }

   

    render() {

        if (!this.state.authors.length){
            return <p>Loading....</p>
        }

        const listOfAuthors = this.state.authors.map((author)=>{
            const{name, id} = author;
            return <Link className="single-author-card" to={`/singleAuthorPage/${id}`} key={id}>{name}</Link>
        })

        return (
            <div className="authors-wrapper">
                <h2 className="authors-title">Authors({this.state.authors.length})</h2>
                {listOfAuthors}
            </div>
        )
    }
}
export default Authors;
