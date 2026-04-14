const express = require("express");
const cors = require("cors");
const mysql = require("./database/mysql-pool");
const app = express();
const port = 3000;

require("dotenv").config();

// Configuración para subir límite de respuesta
app.use(express.json({ limit: "25mb" }));
// Para evitar errores de diferente origen cuando se hace la petición
app.use(cors());

// Configuración para escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Endpoints
app.get("/events", async (req, res) => {
    try {
        const query = "SELECT * FROM events";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");
    }
});


// CONTINUACIÓN BASE DE DATOS

// CREATE TABLE attendance (relación muchos a muchos: usuario - evento)
// user_id
// event_id
// status

// opción going/interested -> cómo representarlo en BBDD? string o enum?
// Posibilidad-> status ENUM('going', 'interested', 'not going') DEFAULT 'going'

// Un usuario puede asistir a muchos eventos
// Un evento puede tener muchos usuarios
// Un usuario no puede asistir dos veces al mismo evento (evitar duplicados de: mismo usuario y mismo evento). EJEMPLO:
// user 3 -> event 10 > going
// user 3 -> event 15 -> interested
// Añadiendo: PRIMARY KEY (user_id, event_id)