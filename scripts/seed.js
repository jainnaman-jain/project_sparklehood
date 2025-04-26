const mongoose = require('mongoose');
const Incident = require('../Schema/Incidents'); // your Incident model

require('dotenv').config();

const seedData = [
  {
    title: 'Bias Detected in AI Hiring System',
    description: 'The AI-based hiring system showed preferential treatment towards certain demographics, leading to unfair rejection rates.',
    severity: 'High',
  },
  {
    title: 'AI Chatbot Spreading Misinformation',
    description: 'A deployed chatbot generated and spread false medical advice to users during testing.',
    severity: 'Medium',
  },
  {
    title: 'Unintended Data Leak via AI Model',
    description: 'Sensitive user data was unintentionally exposed through the output of a machine learning model.',
    severity: 'High',
  },
  {
    title: 'Self-driving Car Misclassification',
    description: 'An autonomous vehicle incorrectly classified a pedestrian as a stationary object, leading to a near-miss incident.',
    severity: 'High',
  },
  {
    title: 'Inappropriate Content Generation',
    description: 'An AI-powered content generation tool produced offensive and inappropriate outputs without user prompting.',
    severity: 'Medium',
  },
  {
    title: 'AI Over-Optimization Failure',
    description: 'An AI system tasked with optimizing delivery routes created unrealistic schedules that human drivers couldn’t meet.',
    severity: 'Low',
  },
  {
    title: 'Training Data Poisoning Detected',
    description: 'A deliberate attempt to poison the training dataset was detected, leading to a compromised model performance.',
    severity: 'High',
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/incidentsDB");
    console.log('MongoDB connected for seeding.');

    // Clear previous data (optional)
    await Incident.deleteMany({});
    console.log('Existing incidents cleared.');

    // Insert new seed data
    await Incident.insertMany(seedData);
    console.log('Seeding successful!');

    mongoose.disconnect();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDB();
