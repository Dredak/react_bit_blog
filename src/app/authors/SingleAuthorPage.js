import React from 'react';
import { Link } from 'react-router-dom'

const SingleAuthorPage = () => {
    return (
        <>
            <Link to="/authors">All authors</Link>
            <h2>Single Author</h2>

        </>
    )
}

export default SingleAuthorPage;