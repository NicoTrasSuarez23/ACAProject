function addProduct(button) {
    // Ocultar el botón "Añadir"
    button.style.display = "none";

    // Mostrar los controles de cantidad
    const cantidadControl = button.nextElementSibling;
    cantidadControl.style.display = "flex";

    // Incrementar la cantidad inicial
    const cantidad = cantidadControl.querySelector(".cantidad");
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
}

function removeProduct(button) {
    // Obtener el contenedor de cantidad
    const cantidadControl = button.parentElement;

    // Reducir la cantidad
    const cantidad = cantidadControl.querySelector(".cantidad");
    const nuevaCantidad = parseInt(cantidad.textContent) - 1;

    if (nuevaCantidad <= 0) {
        // Si la cantidad es 0, ocultar los controles y mostrar el botón "Añadir"
        cantidadControl.style.display = "none";
        cantidadControl.previousElementSibling.style.display = "block";
    } else {
        // Actualizar la cantidad
        cantidad.textContent = nuevaCantidad;
    }
}

function addMoreProduct(button) {
    // Incrementar la cantidad
    const cantidad = button.previousElementSibling;
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
}
function viewCart() {
    // Redirige al usuario a la página del carrito
    window.location.href = "/Repositorio/HTML/shopping.html";
}