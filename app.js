// app.js — Solo lógica, sin servidor
const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hola Arquitectos! Pipeline CI/CD funcionando al 100% 🚀');
});

app.get('/sumar', (req, res) => {
  const resultado = sumar(Number(req.query.a), Number(req.query.b));
  res.json({ resultado });
});

module.exports = { sumar, app };