import React from 'react';
import { Link } from 'react-router-dom';
import fetchAuthor from './../../services/fetchAuthor';
import Loader from '../components/Loader';

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
        
        if (!this.state.author) {
            return (
                <Loader />
            );
        }
        
        const { name, username, email, phone, address, company } = this.state.author;
        
        return (
            <div className="author-info-wrapper">

                <Link to="/authors"><p>&lt;All authors</p></Link>

                <div className="info-row">
                    <img src="https://via.placeholder.com/150x150" alt="avatar" />
                    <div className="info-row-inner-wrapper">
                        <h4>{name}</h4>
                        <p>username: {username}</p>
                        <p>email: {email}</p>
                        <p>phone: {phone}</p>
                    </div>
                </div>
                <hr />

                <div className="info-row">
                    <div className="info-row-inner-wrapper">
                        <h4>Adress</h4>
                        <p>street: {address.street}</p>
                        <p>city: {address.city}</p>
                        <p>zipcode: {address.zipcode}</p>
                    </div>
                    <iframe src={`https://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}&hl=es;z=14&amp;&output=embed`} width="250" height="200" frameBorder="0" allowFullScreen></iframe>
                </div>
                <hr />

                <div className="info-row">
                    <img src="https://via.placeholder.com/150x150" alt="avatar"/>
                    <div className="info-row-inner-wrapper">
                        <h4>Company</h4>
                        <p>name: {company.name}</p>
                        <p>slogan: {company.catchPhrase}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SingleAuthorPage;