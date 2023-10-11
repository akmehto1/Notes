# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container's working directory
COPY . .

# Expose the port on which your Node.js application listens
EXPOSE 5000

# Specify the command to run your Node.js application when the container starts
CMD ["node", "server.js"]
