const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude e longitude são obrigatórias' });
        }

        // Fazendo a requisição à API Nominatim com um User-Agent customizado
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Vercel/1.0)'
            }
        });

        if (response.data && response.data.address) {
            const address = response.data.address;
            res.status(200).json({
                lat,
                lon,
                address
            });
        } else {
            res.status(404).json({ error: 'Endereço não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o endereço' });
    }
};
