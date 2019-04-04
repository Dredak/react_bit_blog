import BASE_URL from '../shared/baseUrl';


const fetchUser = (userId) => {

    const USER_URL = `${BASE_URL}/users/${userId}`;

    return fetch(USER_URL)
        .then((response) => response.json())
}

export default fetchUser;