const formulario = document.querySelector(".form-create");
let cont = 1;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div id="${cont}" class="publicacion">
            <p>id:${cont}</p>
            <p>${descripcion}</p>
            <button id="editar" onclick="editar(this)">Editar</button>
            <button id="eliminar" onclick="eliminar(this)">Eliminar</button>
        </div> `;
        cont++;
        
});
function editar(e){
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    console.log(parrafo);
    parrafo.contentEditable = true;
    e.value = "Guardar";
    if(parrafo.contentEditable){
        parrafo.contentEditable = false;
    }
    if(e.value == "Guardar"){
        e.value = "Editar";
    }
}

function eliminar(e){
    e.parentElement.remove();
}
