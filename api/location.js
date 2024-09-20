const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const address = 'Brazil';
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`);

        if (response.data.length > 0) {
            const { lat, lon } = response.data[0];
            res.status(200).json({ lat, lon });
        } else {
            res.status(404).json({ error: 'Localização não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar geolocalização' });
    }
};