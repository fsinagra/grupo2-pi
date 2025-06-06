let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id = queryStringObj.get("id"); //MODIFICACION DE ENDPOINTS
let nombreGenero = queryStringObj.get("nombreGenero"); 
// url para lista de géneros (para obtener info de ese género, usar el id para filtrar luego)
let urlGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=3fa0a6eda99c0d478223db4a24042745`;

// url para obtener películas de un género específico
let urlPeliculasPorGenero = `https://api.themoviedb.org/3/discover/movie?api_key=3fa0a6eda99c0d478223db4a24042745&with_genres=${id}`;

let tituloGenero = document.querySelector(".titulos");
let listaGeneros = document.querySelector(".listaGeneros"); //article de genero donde estaran los generos
tituloGenero.innerText = nombreGenero;

fetch(urlPeliculasPorGenero)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let listaForGeneros = document.querySelector(".principal");
  
      // Recorre cada serie dentro del array "results"
    for (let i = 0; i < data.results.length; i++) {
      let peli = data.results[i];
      let imagen = peli.poster_path;
      let titulo = peli.title; // En peli el título es "title"
      
      listaForGeneros.innerHTML += `
        <li>
          <a href="./detallepelicula.html?id=${peli.id}"> 
            <img src="https://image.tmdb.org/t/p/w500/${imagen}" alt="${titulo}">
            <p class="tituloPeli">${titulo}</p>
          </a>
        </li>
      `;
    };
    
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
  




