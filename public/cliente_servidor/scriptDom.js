let prevElementos = [];

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el valor del input
    const nombreNuevo = document.getElementById('nombreNuevo').value;

    // Enviar el dato al servidor
    fetch("/cliente_servidor/request_datos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombreNuevo: nombreNuevo })
    })
    .then(response => response.json())
    .then(data => {

        if (!prevElementos.includes(data)) {
            // Si no existe, agregarlo al arreglo
            prevElementos = [...prevElementos, data];

            // Crear el elemento div columna con las clases especificadas
            const nuevoElemento = document.createElement('div');
            nuevoElemento.className = 'col-lg-4 col-md-6 col-sm-12 p-3';

            //Inserta el div de adentro del div columna
            const nuevoSubelemento = document.createElement('div');
            nuevoSubelemento.className = 'bg-dark p-3 rounded';

            //Inserta el h1 dentro del div
            const nuevoSubelemento2 = document.createElement('h1');
            nuevoSubelemento2.className = 'text-white';
            nuevoSubelemento2.innerHTML = data.name;

            const nuevoSubelemento3 = document.createElement('p');
            nuevoSubelemento3.className = 'text-white';
            nuevoSubelemento3.innerHTML = data.description;

            nuevoSubelemento.appendChild(nuevoSubelemento2);
            nuevoSubelemento.appendChild(nuevoSubelemento3);

            nuevoElemento.appendChild(nuevoSubelemento);

            // Obtener el elemento contenedor fila por su ID
            const contenedor = document.getElementById('filaContenedor');

            // Insertar el nuevo elemento dentro del contenedor
            contenedor.appendChild(nuevoElemento);
        }
        

    })
    .catch(error => {
        console.error('Error:', error);
    });
});