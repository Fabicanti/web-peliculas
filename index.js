const btnAnterior = document.getElementById("btn-ant");
const btnSiguiente = document.getElementById("btn-sig");
const containerPelis = document.getElementById("pelis-container");
const containerAclam = document.getElementById("pelis-aclamadas");
let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if (pagina > 1){
        pagina -= 1;
        cargarTendencias();
    }
});
btnSiguiente.addEventListener("click", ()=>{
    if (pagina <= 1000){
        pagina += 1;
        cargarTendencias();
    }
});
const cargarTendencias = async() =>{
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a9dca8538c56c2bb3b8024e0f0ed8a66&language=es-MX&page=${pagina}`);
        if (respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = [];

            datos.results.forEach(peli => {
                peliculas += `
                <div class="pelicula">
                    <a href="peliculas.html">
                        <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" alt="${peli.title}">
                        <h4 class="tituloPeli">
                            ${peli.original_title}
                        </h4>
                    </a>
                </div>
                `
            });
            containerPelis.innerHTML = peliculas;
        }
    }
    catch(error){
        console.log(error.message);
    }
}

const cargarAclamadas = async() => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a9dca8538c56c2bb3b8024e0f0ed8a66&language=es-MX&page=1`);
        if (respuesta.status === 200){
            const datos = await respuesta.json();
            let aclamadas = [];
            datos.results.forEach(peli => {
                aclamadas += `
                <div class="pelicula1">
                    <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" alt="${peli.title}">
                </div>
                `
            });
            containerAclam.innerHTML = aclamadas;
        }
    }
    catch(error){
        console.log(error.message);
    }
}

cargarTendencias();
cargarAclamadas()