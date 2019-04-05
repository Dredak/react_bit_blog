import React from 'react';
import { Link } from 'react-router-dom';
import fetchAuthor from './../../services/fetchAuthor';

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    onLoadAuthor(id) {
        fetchAuthor(id)
            .then((fetchedAuthor) => {
                this.setState({ author: fetchedAuthor })
            })
    }

    componentDidMount() {
        this.onLoadAuthor(this.props.match.params.id);
    }

    render() {

        const { author } = this.state;

        if (!author) {
            return ""
        }

        const { name, username, email, phone, address } = this.state.author;
        console.log(this.state.author);
        return (
            <>

                <Link to="/authors"><p>All authors</p></Link>

                <div className="layout">
                    <img src="https://via.placeholder.com/150" />
                    <div className="innerLayout">
                        <h4>{name}</h4>
                        <p>username: {username}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>
                <hr />

                <div className="layout">
                    <div className="innerLayout">
                        <h4>Adress</h4>
                        <p>street: {address.street}</p>
                        <p>city: {address.city}</p>
                        <p>zipcode: {address.zipcode}</p>
                    </div>
                    <img src="https://via.placeholder.com/150" />
                </div>
                <hr />

                <div className="layout">
                    <img src="https://via.placeholder.com/150" />
                    <div className="innerLayout">
                        <h4>Adress</h4>
                        <p>username: {username}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>

            </>
        )
    }
}

export default SingleAuthorPage;