# Use Node.js image with v7
FROM node:7

# Set working directory in the container to /app
WORKDIR /app

# Copy application to /app dir and install dependencies
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app

# Tell Docker what we should execute when the image is launching
CMD node index.js

# Expose port 8081 of the container to the outside world
EXPOSE 8081
