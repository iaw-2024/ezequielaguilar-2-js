const express = require("express");
const app = express();
const path = require('path');

//body parser para el metodo post
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//engine para ejs
app.set("view engine", "ejs");

app.set('views', path.join(__dirname, '../public/express'));



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

    if (datosRecibido.toLowerCase() == datosAPI[0].name.toLowerCase()) {
        // Si el dato coincide, enviar el peleador correspondiente
        res.json(datosAPI[0]);
    } else if (datosRecibido.toLowerCase() == datosAPI[1].name.toLowerCase()){
        res.json(datosAPI[1]);
    } else if (datosRecibido.toLowerCase() == datosAPI[2].name.toLowerCase()){
        res.json(datosAPI[2]);
    } else if (datosRecibido.toLowerCase() == datosAPI[3].name.toLowerCase()){
        res.json(datosAPI[3]);
    } else if (datosRecibido.toLowerCase() == datosAPI[4].name.toLowerCase()){
        res.json(datosAPI[4]);
    } else if (datosRecibido.toLowerCase() == datosAPI[5].name.toLowerCase()){
        res.json(datosAPI[5]);
    } 

});

app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;