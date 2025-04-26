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


// Catch-all route for undefined routes
app.use((req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="refresh" content="2;url=/api-docs" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Page Not Found</title>
      <style>
        body {
          background-color: #f8f9fa;
          color: #343a40;
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 100px;
        }
        h1 {
          font-size: 50px;
        }
        p {
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you to API Docs...</p>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
