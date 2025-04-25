// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Safety Incident Log API',
      version: '1.0.0',
      description: 'API documentation for logging and managing AI safety incidents',
    },
    servers: [
      {
        url: process.env.url,
      },
    ],
  },
  apis: ['./index.js', './incidentController.js'], // Paths to files with Swagger comments
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
