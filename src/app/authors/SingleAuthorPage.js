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
                    <iframe src={`https://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}&hl=es;z=14&amp;&output=embed`} width="250" height="200" frameborder="0" allowfullscreen></iframe>
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