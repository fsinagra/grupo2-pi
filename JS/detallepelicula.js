let queryString = location.search;
console.log(queryString);
let queryObj = new URLSearchParams(queryString);
let id = queryObj.get("id");

// URL del endpoint para traer la info de la película
let url = 





