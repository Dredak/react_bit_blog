import React from 'react';
import { Link } from 'react-router-dom';
class Authors extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h2>Authors</h2>
                <Link to="/singleAuthorPage"><h4>Name Surname</h4></Link>
            </>
        )
    }
}
export default Authors;