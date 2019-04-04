import BASE_URL from '../shared/baseUrl';

const POSTS_API = `${BASE_URL}/posts`
const fetchPosts = () => {
    return fetch(POSTS_API)
        .then(response => response.json())  //then ocekuje anonimnu funkciju, samo smo odradili arrow pa nema zagrada , inace taj response je argument

}
export default fetchPosts;