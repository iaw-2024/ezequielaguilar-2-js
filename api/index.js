const express = require("express");
const app = express();
const path = require('path');

//body parser para el metodo post
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//engine para ejs
app.set("view engine", "ejs");

app.set('views', path.join(__dirname, '../views'));



async function obtenerDatosAPI() {
    const datos = await fetch("https://660332b22393662c31ceb508.mockapi.io/api/ej2/Eze");
    const datosEnJson = await datos.json();
    return datosEnJson;
}

app.get("/express", async (req, res) => {
    const datosAPI = await obtenerDatosAPI();
    res.render("index", { objetoPeleador: datosAPI });
});

app.post("/cliente_servidor/request_datos", async (req, res) => {
    const datosRecibido = req.body.nombreNuevo;
    const datosAPI = await obtenerDatosAPI();

    datosAPI.forEach(peleador => {
        if (datosRecibido.toLowerCase() == peleador.name.toLowerCase()) {
            // Si el dato coincide, enviar el peleador correspondiente
            res.json(peleador);
            return; // Esto detiene el forEach una vez que se encontró una coincidencia
        }
    });

});

app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;

/*Versel */