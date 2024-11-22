// app.js
const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolroutes');

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use the school routes
app.use('/api', schoolRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
