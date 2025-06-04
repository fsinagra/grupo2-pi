// Películas Animadas
let urlPeliculas = "https://api.themoviedb.org/3/movie/popular?api_key=3fa0a6eda99c0d478223db4a24042745";

fetch(urlPeliculas)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let section = document.querySelectorAll(".principal")[0];
    let peliculas = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
      let pelicula = peliculas[i];
      contenido = contenido + `
        <article>
          <a href="./detallepelicula.html?id=${pelicula.id}">
            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
          </a>
          <p>${pelicula.title}</p>
          <p>Estreno: ${pelicula.release_date}</p>
        </article>
      `;
    }

    section.innerHTML = contenido;
  })
  .catch(function(error){
    console.log(error);
  });

// Series
let urlSeries = "https://api.themoviedb.org/3/tv/popular?api_key=3fa0a6eda99c0d478223db4a24042745";

fetch(urlSeries)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let section = document.querySelectorAll(".principal")[1];
    let series = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
      let serie = series[i];
      contenido = contenido + `
        <article>
          <a href="./detalleserie.html?id=${serie.id}">
            <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="${serie.name}">
          </a>
          <p>${serie.name}</p>
          <p>Estreno: ${serie.first_air_date}</p>
        </article>
      `;
    }

    section.innerHTML = contenido;
  })
  .catch(function(error){
    console.log(error);
  });

// Clásicos
let urlClasicos = "https://api.themoviedb.org/3/movie/top_rated?api_key=3fa0a6eda99c0d478223db4a24042745";
fetch(urlClasicos)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let section = document.querySelectorAll(".principal")[2];
    let clasicos = data.results;
    let contenido = "";

    for (let i = 0; i < 5; i++) {
      let clasico = clasicos[i];
      contenido = contenido + `
        <article>
          <a href="./detallepelicula.html?id=${clasico.id}">
            <img src="https://image.tmdb.org/t/p/w500/${clasico.poster_path}" alt="${clasico.title}">
          </a>
          <p>${clasico.title}</p>
          <p>Estreno: ${clasico.release_date}</p>
        </article>
      `;
    }
    section.innerHTML = contenido;
  })
  .catch(function(error){
    console.log(error);
  });
