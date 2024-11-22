const db = require('../database/db');

const listSchools = (req, res) => {
    const { latitude: userLat, longitude: userLng } = req.query;

    if (!userLat || !userLng) {
        return res.status(400).json({ error: 'User latitude and longitude are required.' });
    }

    const query = 'SELECT * FROM schools';
    db.query(query, (err, schools) => {
        if (err) return res.status(500).json({ error: 'Database error', details: err });

        const userLatitude = parseFloat(userLat);
        const userLongitude = parseFloat(userLng);

        const sortedSchools = schools.map((school) => {
            const distance = Math.sqrt(
                Math.pow(userLatitude - school.latitude, 2) + Math.pow(userLongitude - school.longitude, 2)
            );
            return {
                id: school.id,
                name: school.name,
                address: school.address,
                latitude: school.latitude,
                longitude: school.longitude,
                distance: distance.toFixed(2),
            };
        }).sort((a, b) => a.distance - b.distance);
    
        res.json(sortedSchools);
    });
};

module.exports = listSchools;
