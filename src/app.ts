
const apiUrl = 'https://rickandmortyapi.com/api/character/1';

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
