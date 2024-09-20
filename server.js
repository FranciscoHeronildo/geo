const express = require('express');
const locationHandler = require('./api/location');  // Importa o código que você escreveu no location.js

const app = express();

app.get('/api/location.js', locationHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});