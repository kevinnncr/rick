
import axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api/character/1';

axios.get(apiUrl)
    .then((response) => {
        
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
