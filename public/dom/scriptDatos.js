// Definir la URL del endpoint
const endpoint = 'https://660332b22393662c31ceb508.mockapi.io/api/ej2/Eze';

// Realizar la solicitud GET a la API
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const listaH1 = document.querySelectorAll('h1');
    const listaP =  document.querySelectorAll('p');

    // Iterar sobre cada objeto JSON
    data.forEach((objeto, index) => {
        // Verificar si hay un <h1> y <p> correspondiente en la lista
        if (listaH1[index] && listaP[index]) {
          // Obtener el nombre y la descripción del objeto y asignarlos a los elementos <h1> y <p> respectivamente
          listaH1[index].textContent = objeto.name;
          listaP[index].textContent = objeto.description;
        } else {
          console.error('No hay suficientes elementos <h1> o <p> en el documento para mostrar los datos.');
        }
      });
  })
  .catch(error => console.error('Error al obtener los datos:', error));