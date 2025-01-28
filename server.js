const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos del directorio 'dist'
app.use(express.static(path.join(__dirname, 'dist/volley-ui')));

// Redirigir todas las solicitudes a 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/volley-ui/index.html'));
});

// Usar el puerto asignado por Railway o un puerto por defecto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
