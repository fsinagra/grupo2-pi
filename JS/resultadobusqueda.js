let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let termino = queryObj.get("buscador");
let tipo = queryObj.get("tipo");
// el tipo es para encontrar el valor de clave 

console.log("Término buscado:", termino);
console.log("Tipo:", tipo);
// asi chequeo si esta bien leyendo 

let spinner = document.querySelector(".spinner");
let lista = document.querySelector(".listaResultados");
let noResultados = document.querySelector(".no-resultados");
let textoBusqueda = document.querySelector("#textoBusqueda");

// el texto con el término buscado
textoBusqueda.innerHTML = 'Resultados para: "' + termino + '"';

// Muestro el spinner mientras cargo los resultados
spinner.innerHTML = "Cargando resultados...";
noResultados.innerHTML = "";
lista.innerHTML = "";

// URL de búsqueda para películas
let urlPeliculas = "https://api.themoviedb.org/3/search/movie?api_key=3fa0a6eda99c0d478223db4a24042745&language=es-ES&query=" + termino;

// URL de búsqueda para series
let urlSeries = "https://api.themoviedb.org/3/search/tv?api_key=3fa0a6eda99c0d478223db4a24042745&language=es-ES&query=" + termino;

if (tipo === "pelicula") {
  // Fetch para películas
  fetch(urlPeliculas)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      spinner.innerHTML = "";
      let resultados = data.results;
      let contenido = "";

      if (resultados.length > 0) {
        for (let i = 0; i < resultados.length; i++) {
          let id = resultados[i].id;
          let titulo = resultados[i].title;
          let imagen = resultados[i].poster_path;
          let enlace = "./detallepelicula.html?id=" + id;

          contenido = contenido + `
            <li>
              <a href="${enlace}">
                <img src="https://image.tmdb.org/t/p/w500/${imagen}" alt="${titulo}">
                <p class="tituloPeli">${titulo}</p>
              </a>
            </li>
          `;
        }
        lista.innerHTML = contenido;
      } else {
        noResultados.innerHTML = "No se encontraron resultados para tu búsqueda.";
      }
    })
    .catch(function(error){
      console.log(error);
    });

} else {
  // Fetch para series
  fetch(urlSeries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);

      spinner.innerHTML = "";

      let resultados = data.results;
      let contenido = "";

      if (resultados.length > 0) {
        for (let i = 0; i < resultados.length; i++) {
          let id = resultados[i].id;
          let titulo = resultados[i].name;
          let imagen = resultados[i].poster_path;
          let enlace = "./detalleserie.html?id=" + id;
          contenido = contenido + `
            <li>
              <a href="${enlace}">
                <img src="https://image.tmdb.org/t/p/w500/${imagen}" alt="${titulo}">
                <p class="tituloPeli">${titulo}</p>
              </a>
            </li>
          `;
        }
        lista.innerHTML = contenido;
      } else {
        noResultados.innerHTML = "No se encontraron resultados para tu búsqueda.";
      }
    })
    .catch(function(error){
      console.log(error);
    });
}






   
