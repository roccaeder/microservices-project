# Microservices Project - Node.js with Docker and Colima

This is a sample project implementing a microservices architecture using Node.js, Docker, and Colima. The project consists of two microservices: `user-service` and `product-service`.

## Requirements

- **Colima**: To run Docker on Mac with M1/M2 chips.
- **Docker**: To build and manage containers.
- **Node.js**: To run the applications for the microservices.

### Installing Prerequisites

1. **Install Docker**: If you don't have Docker installed, download Docker Desktop for your machine [here](https://www.docker.com/products/docker-desktop).
2. **Install Colima**: If you’re on a Mac with M1/M2 chip, installing [Colima](https://github.com/abiosoft/colima) can be more efficient than using Docker Desktop directly.

## Starting the Containers

1. **Start Colima**:
   
   If you haven't started Colima yet, use the following command to start it:

   ```bash
   colima start --arch aarch64 --memory 4 --cpu 2
   ```

   This will start Colima with 4GB of memory and 2 CPUs, optimized for Mac with M1/M2 chips.

2. **Build and Start the Containers**:

   Navigate to the project root directory and use `docker-compose` to build and start the containers:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build Docker images for `user-service` and `product-service` from their respective `Dockerfile`.
   - Start both containers and connect them.

3. **Accessing the Microservices**:

   Once the containers are up and running, you can access the services via the following endpoints:

   - **User Service**: [http://localhost:3001/users](http://localhost:3001/users)
   - **Product Service**: [http://localhost:3002/products](http://localhost:3002/products)

   Both services will return simulated JSON responses.

## Project Details

### user-service

- **Port**: `3001`
- **Endpoint**: `/users`
- Response: List of simulated users.

### product-service

- **Port**: `3002`
- **Endpoint**: `/products`
- Response: List of simulated products.

---

## Technologies

- **Node.js**: JavaScript platform for the microservices.
- **Docker**: For building and managing containers.
- **Colima**: For lightweight virtualization on Macs with ARM chips.
- **docker-compose**: For managing multiple containers and network configurations between services.
