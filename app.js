// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo global para almacenar los amigos.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('nombre-amigo');
    let nombre = inputAmigo.value.trim(); // Usamos trim() para limpiar espacios en blanco.

    // 1. Validación: No permitir nombres vacíos.
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return; // Detiene la función.
    }

    // 2. Validación: No permitir nombres duplicados.
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        inputAmigo.value = ''; // Limpiamos el campo.
        return;
    }
    
    // Agregamos el amigo al arreglo y actualizamos la pantalla.
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiamos el campo de entrada.
    inputAmigo.value = '';
}

function sortearAmigo() {
    // Validación: Se necesitan al menos 4 personas para un sorteo.
    if (amigos.length < 4) {
        alert('Debes agregar al menos 4 amigos para realizar el sorteo.');
        return;
    }

    // Mezclamos (barajamos) el arreglo de amigos.
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambio de elementos.
    }

    let listaSorteo = document.getElementById('lista-sorteo');
    listaSorteo.innerHTML = ''; // Limpiamos sorteos anteriores.

    // Asignamos las parejas.
    for (let i = 0; i < amigos.length; i++) {
        let de = amigos[i];
        // El último amigo le regala al primero para cerrar el círculo.
        let para = i === (amigos.length - 1) ? amigos[0] : amigos[i + 1];
        
        listaSorteo.innerHTML += `<li>${de} --> ${para}</li>`;
    }
}

// Función para actualizar la lista de amigos en pantalla.
function actualizarListaAmigos() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // Limpiamos la lista para reconstruirla.
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Función para reiniciar el juego.
function reiniciar() {
    amigos = [];
    document.getElementById('nombre-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteo').innerHTML = '';
}