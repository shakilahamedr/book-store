# Use the official Node.js image as a base
FROM node:20-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from your local 'book-store/server' folder
# to the /usr/src/app directory inside the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your backend source code
# The source (first '.') is your local 'book-store/server' folder
# The destination (second '.') is the current WORKDIR, /usr/src/app
COPY . .

# Expose the port your Node.js app runs on (e.g., 3000)
EXPOSE 5000

# Define the command to run your application
# This is executed from the WORKDIR, so it runs '/usr/src/app/server.js'
CMD [ "node", "server.js" ]
