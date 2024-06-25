#!/bin/bash

# Create the .ssh directory and set up the SSH key
mkdir -p ~/.ssh
echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa

# Pull the latest Docker image
docker pull zeilar/portfolio:latest

# Stop and remove the existing container if it exists
docker stop portfolio || true
docker rm portfolio || true

# Run the new Docker container
docker run -d --name portfolio -p 3000:3000 zeilar/portfolio:latest
