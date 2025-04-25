# project_sparklehood
Here is the complete `README.md` content for your project. You can copy and paste this directly into your `README.md` file.

# AI Safety Incident Log API

This is a Node.js API for managing AI safety incidents. It allows users to log, view, and delete incidents that could potentially pose safety concerns related to AI systems.

### Features:
- Create new incidents
- Retrieve all incidents
- View a specific incident by ID
- Delete incidents
- Interactive API documentation using Swagger

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jainnaman-jain/project_sparklehood
   ```

2. **Navigate to the project folder:**

   ```bash
   cd project_sparklehood
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of the project and add your MongoDB connection string:

   ```env
   DATABASE_URL=your-mongodb-connection-string
   ```

---

## Usage

1. **Start the application:**

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:8000`.

2. **Access the API documentation:**

   Once the server is running, open your browser and go to:

   ```
   http://localhost:8000/api-docs
   ```

   This will take you to the Swagger UI where you can interactively test all available API endpoints.

---

## API Documentation

The API has the following routes:

### **1. Get all incidents**
- **Endpoint:** `GET /incidents`
- **Description:** Fetch a list of all incidents.
- **Responses:**
  - 200 OK: Returns an array of incidents.

### **2. Create a new incident**
- **Endpoint:** `POST /incidents`
- **Body:**
  ```json
  {
    "title": "Incident Title",
    "description": "Incident Description",
    "severity": "Low/Medium/High"
  }
  ```
- **Description:** Create a new incident.
- **Responses:**
  - 201 Created: Returns the created incident.

### **3. Get a specific incident by ID**
- **Endpoint:** `GET /incidents/:id`
- **Parameters:**
  - `id`: The ID of the incident.
- **Description:** Fetch a specific incident by its ID.
- **Responses:**
  - 200 OK: Returns the incident details.

### **4. Delete an incident by ID**
- **Endpoint:** `DELETE /incidents/:id`
- **Parameters:**
  - `id`: The ID of the incident to delete.
- **Description:** Delete a specific incident.
- **Responses:**
  - 200 OK: Returns a message indicating successful deletion.