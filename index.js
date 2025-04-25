const express = require('express');
require('./configs');
const {getAllIncidents, createIncidents, getIncidentById, deleteIncidentById} = require('./incidentCotrollers')
const path = require('path');
const cors = require('cors')
const { swaggerUi, specs } = require('./swagger');
const app = express();
const PORT = 8000;

// Connect to MongoDB
app.set('view engine', 'ejs');
app.set("views", path.resolve('./views'))

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /incidents:
 *   get:
 *     summary: Get all incidents
 *     responses:
 *       200:
 *         description: A list of incidents
 */
app.get('/incidents', getAllIncidents);

/**
 * @swagger
 * /incidents:
 *   post:
 *     summary: Create a new incident
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - severity
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               severity:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *     responses:
 *       201:
 *         description: Incident created
 */
app.post('/incidents', createIncidents);

/**
 * @swagger
 * /incidents/{id}:
 *   get:
 *     summary: Get a specific incident by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single incident
 */
app.get('/incidents/:id', getIncidentById);



/**
 * @swagger
 * /incidents/{id}:
 *   delete:
 *     summary: Delete a specific incident
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Incident deleted
 */
app.delete('/incidents/:id', deleteIncidentById);



// Start server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
