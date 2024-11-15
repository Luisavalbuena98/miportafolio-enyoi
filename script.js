function abrirModal(titulo,descripcion,image){
    document.getElementById("myModal").style.display="flex";
    document.getElementById("modal-title").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal-image").src = image;
}

function cerrarModal(){
    document.getElementById("myModal").style.display="none";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function (event){
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target){
            window.scrollTo(
                {
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
        }

    });
});
