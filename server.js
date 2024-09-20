const express = require('express');
const locationHandler = require('./api/location');  // Caminho para o arquivo location.js

const app = express();

app.get('/api/location', locationHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});