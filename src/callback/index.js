/**************************/
/*                        */
/*      PROMESAS API      */
/*                        */
/**************************/

// Llamo a la dependencia mediante módulo
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Añado la URL de la API
const API_URL = "https://rickandmortyapi.com/api/character/";

// Creo una función que devuelva los datos
function devolverDatos(url_api) {
    // Hago que se devuelva una promesa que contiene una función
    return new Promise(function(resolve, reject) {
    // Creo una instancia de XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    // Consultaré los siguientes parámetros
    xhttp.open('GET', url_api, true);
    // Leer cualquier cambio
    xhttp.onreadystatechange = function(event) {
        // Comprobar si el estado es completado y correcto
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                // Si da una respuesta correcta, se ejecuta el resolve de la función
                resolve(JSON.parse(xhttp.responseText));
            } else {
                // Si hay error, se ejecuta el reject, que devuelve error
                reject('Error' + url_api);   
            }
        }
    };
    xhttp.send();
    })
}
