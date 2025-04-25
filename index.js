const express = require('express');
require('./configs');
const {getAllIncidents, createIncidents, getIncidentById, deleteIncidentById} = require('./incidentCotrollers')

const app = express();
const PORT = 8000;

// Connect to MongoDB


// Middleware
app.use(express.json());



// Routes

// GET /incidents - fetch all incidents
app.get('/incidents', getAllIncidents);

// POST /incidents - create new incident
app.post('/incidents', createIncidents);

// GET /incidents/:id - get a specific incident
app.get('/incidents/:id', getIncidentById);

// DELETE /incidents/:id - delete a specific incident
app.delete('/incidents/:id', deleteIncidentById);

// Start server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
