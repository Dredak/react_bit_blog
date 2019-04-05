import BASE_URL from '../shared/baseUrl';
import AuthorPost from '../app/entities/AuthorPost';

const fetchSingleAuthorPosts = (id) => {
    const AUTHOR_POSTS_URL = `${BASE_URL}/posts?userId=${id}`
    return fetch(AUTHOR_POSTS_URL)
        .then(response => response.json())
        .then((response) => {
            return response.slice(7, 10)
                .map((response) => {
                    const { title, id, body } = response;
                    return new AuthorPost(title, id, body)

                })
        })

}
export default fetchSingleAuthorPosts;