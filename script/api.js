const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");
let pagina = 1;
btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});
btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async()=>{
   try{
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a9dca8538c56c2bb3b8024e0f0ed8a66&language=es-MX&page=${pagina}`)
    if(respuesta.status === 200){
        const datos = await respuesta.json();
        let peliculas = [];
        datos.results.forEach(peli => {
            peliculas += `
            <div class="card pelicula">
                <img src="https://image.tmdb.org/t/p/original/${peli.poster_path}" alt="${peli.title}" class="poster">
                <div class="card-body">
                    <h5 class="card-title titulos">${peli.title} </h5>
                </div>
            </div>
            `;            
        });
        contenedor.innerHTML = peliculas;
    }
   }
   catch(error){
    console.log(error.message);
   }
}
cargarPeliculas();