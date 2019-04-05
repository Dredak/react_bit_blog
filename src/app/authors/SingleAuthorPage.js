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

        const { name, username, email, phone, address, company } = this.state.author;
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d20.45802175!3d44.80996845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1554477970115!5m2!1sen!2srs" width="250" height="200" frameborder="0" allowfullscreen></iframe>
                </div>
                <hr />

                <div className="layout">
                    <img src="https://via.placeholder.com/150" />
                    <div className="innerLayout">
                        <h4>Company</h4>
                        <p>name: {company.name}</p>
                        <p>slogan: {company.catchPhrase}</p>
                    </div>
                </div>

            </>
        )
    }
}

export default SingleAuthorPage;