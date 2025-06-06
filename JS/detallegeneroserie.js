let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id = queryStringObj.get("id"); // ID del género de serie desde la URL
let nombreGenero = queryStringObj.get("nombreGenero"); 
// URL para lista de géneros de series
let urlGeneros = `https://api.themoviedb.org/3/genre/tv/list?api_key=3fa0a6eda99c0d478223db4a24042745`;
// URL para obtener series de un género específico
let urlSeriesPorGenero = `https://api.themoviedb.org/3/discover/tv?api_key=3fa0a6eda99c0d478223db4a24042745&with_genres=${id}`;
let tituloGenero = document.querySelector(".titulos");
let listaGeneros = document.querySelector(".listaGeneros"); // elemento donde estarán los géneros (igual que en películas)
tituloGenero.innerText = nombreGenero;

fetch(urlSeriesPorGenero)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let listaForGeneros = document.querySelector(".principal");
    // Recorre cada serie dentro del array "results"
    for (let i = 0; i < data.results.length; i++) {
      let serie = data.results[i];
      let imagen = serie.poster_path;
      let titulo = serie.name; // En series el título es "name"
      
      listaForGeneros.innerHTML += `
        <li>
          <a href="./detalleserie.html?id=${serie.id}"> 
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

