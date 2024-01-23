En el codigo de axios.ts , usamos la biblioteca de axios para hacer la solicitud HTTP con GET en la API
import axios from 'axios';
Aqui importamos axios
const apiUrl = 'https://rickandmortyapi.com/api/character/1';
Aqui usamos la url de la API y la parte del ultimo /1 si ponemos /2 nos va a mostrar la información del personaje 2 y asi dependiendo el ID que pongamos al final 
axios.get(apiUrl)
Aqui es donde usamos axios para la solicitud HTTP GET de la url que pusimos.

    .then((response) => {
       
        console.log(response.data);
    })

Aqui .then nos va a ayudar en el manejo exitoso de la solicitud y 'response.data' contiene la información obtenida de la API , y se imprime en la consola.
.catch((error) => {
   
    console.error('Error:', error.message);
});
Aquí, se imprime un mensaje de error en la consola si la solicitud a la API falla. 'error' contendrá información sobre el error en el codigo
