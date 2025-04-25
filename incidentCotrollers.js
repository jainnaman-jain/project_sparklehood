const Incident = require('./Schema/Incidents')

async function getAllIncidents(req, res) {
  const incidents = await Incident.find({});
  return res.status(200).json(incidents);
}

async function createIncidents(req, res) {
  const { title, description, severity } = req.body;

  if (!title || !severity) {
    return res.status(400).json({ error: "Title and severity are required." });
  }

  if (!['Low', 'Medium', 'High'].includes(severity)) {
    return res.status(400).json({ error: "Severity must be Low, Medium, or High." });
  }

  try {
    const incident = await Incident.create({ title, description, severity });
    return res.status(201).json(incident);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create incident." });
  }
}

async function getIncidentById(req, res) {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) return res.status(404).json({ error: "Incident not found" });
    return res.json(incident);
  } catch (error) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
}

async function deleteIncidentById(req, res) {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) return res.status(404).json({ error: "Incident not found" });
    return res.json({ status: 'success', message: 'Incident deleted' });
  } catch (error) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
}
module.exports = {getAllIncidents, createIncidents, getIncidentById, deleteIncidentById}