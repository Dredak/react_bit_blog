import BASE_URL from '../shared/baseUrl';
import Author from '../app/entities/Author';


const fetchAuthors = () => {

    const USERS_URL = `${BASE_URL}/users`;

    return fetch(USERS_URL)
        .then((response) => response.json())
        .then((response) =>{
            return response.map((author)=>{
                const {name, id} = author;
                return new Author(name , id);  
            });
        })
}

export default fetchAuthors;