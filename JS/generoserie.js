let url = "https://api.themoviedb.org/3/genre/tv/list?api_key=3fa0a6eda99c0d478223db4a24042745";

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let generos = data.genres;
    let lista = document.querySelector(".generos");
    let contenido = "";

    for (let i = 0; i < generos.length; i++) {
      contenido = contenido + `
        <li>
          <a href="./detallegeneroserie.html?id=${generos[i].id}&tipo=serie&nombreGenero=${generos[i].name}">${generos[i].name}</a>
        </li>
      `;
    }
    lista.innerHTML = contenido;
  })
  .catch(function(error){
    console.log(error);
  });
