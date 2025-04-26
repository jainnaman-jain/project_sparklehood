# Use official Node.js image
FROM node:23-slim

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .
# Expose the port your app uses
EXPOSE 8000

# Start the server
CMD ["npm", "start" ]
