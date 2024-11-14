function abrirModal(titulo,descripcion,image){
    document.getElementById("myModal").style.display="flex";
    document.getElementById("modal-title").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal-image").src = image;
}

function cerrarModal(){
    document.getElementById("myModal").style.display="none";
}