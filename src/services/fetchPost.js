import BASE_URL from './../shared/baseUrl';


const fetchPost = (id) => {

    const POST_URL = `${BASE_URL}/posts/${id}`;

    return fetch(POST_URL)
        .then((response) => response.json())
}

export default fetchPost;