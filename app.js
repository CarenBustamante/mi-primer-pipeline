// app.js — Nuestra aplicación web simple
const express = require('express');
const app = express();

// La función que vamos a testear: suma dos números
function sumar(a, b) {
  return a + b; // ✅ Restaurado correctamente
}

// Ruta principal: devuelve "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi Pipeline!');
});

// Ruta que suma: /sumar?a=5&b=3
app.get('/sumar', (req, res) => {
  const resultado = sumar(Number(req.query.a), Number(req.query.b));
  res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
// Exportamos la función para poder testearla
module.exports = { sumar, app };
