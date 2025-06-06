let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id = queryStringObj.get("id"); //MODIFICACION DE ENDPOINTS
// url para lista de géneros (para obtener info de ese género, usar el id para filtrar luego)
let urlGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=3fa0a6eda99c0d478223db4a24042745`;

// url para obtener películas de un género específico
let urlPeliculasPorGenero = `https://api.themoviedb.org/3/discover/movie?api_key=3fa0a6eda99c0d478223db4a24042745&with_genres=${id}`;

let listaGeneros = document.querySelector(".listaGeneros") //article de genero donde estaran los generos

fetch(urlGeneros)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let tituloGenero = document.querySelector(".titulos"); 
    // aca muestra el nombre de genero seleccionado con el estilo de .titulos
    let generoEncontrado = data.genres.find(function(genero) {
      return genero.id == id;
    });
    // busca en el array de generos el que coincide el id 

    if (generoEncontrado) {
      tituloGenero.innerText = generoEncontrado.name;
      // si coincide el id, muestra el name del genero 
    } else {
      tituloGenero.innerText = "Género no encontrado";
    }
    // y esto en caso que no coincida el id 
  })
  .catch(function(error) {
    console.log(`Error: ${error}`);
  });

fetch(urlPeliculasPorGenero)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let listaForGeneros = document.querySelector(".principal");
  // Esto selecciona el elemento HTML con la clase principal donde se mostrarán las películas
      data.results.forEach(function(pelicula) {
      // Recorre cada película dentro del array "results" que viene en los datos
        let imagen = pelicula.poster_path;
        let titulo = pelicula.title;
        listaForGeneros.innerHTML +=  `
          <li>
            <a href="./detallepelicula.html?id=${pelicula.id}">
              <img src="https://image.tmdb.org/t/p/w500/${imagen}" alt="${titulo}">
              <p class="tituloPeli">${titulo}</p>
            </a>
          </li>
        `;
      });
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
  




