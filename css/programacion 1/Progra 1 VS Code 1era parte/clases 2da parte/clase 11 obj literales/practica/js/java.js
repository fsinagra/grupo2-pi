let ironMan = {
    nombre: "Iron man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(numero){
        energia = this.energia - 10
        return `poder elegido de ${nombre}: ${poderes[numero]}. Energia restante: ${energia}}`
    }
}

let Hulk = {
    nombre: "Iron man",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(numero){
        energia = this.energia - 10
        return `poder elegido de ${nombre}: ${poderes[numero]}. Energia restante: ${energia}`
    }
}

console.log(Hulk.getPoder(0));

