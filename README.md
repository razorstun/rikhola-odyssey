# My Portfolio Web Application

Welcome to my portfolio web application! This project showcases my professional portfolio and career experience.

## Overview

This web application is designed to provide an overview of my skills, projects, and career journey. It is built using microservices architecture to ensure modularity and scalability.

## Features

- **Frontend**: React-based UI for an interactive and user-friendly experience.
- **Backend Microservice**: Flask application serving dynamic content and handling backend functionality.
- **Database**: SQLite database (`.sqlite.db`) storing information about projects, experiences, etc.
- **Nginx**: Nginx server for handling reverse proxy and serving static files.

## Prerequisites

Make sure you have the following installed:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)

To run the project locally without docker, make sure you have the following installed:

- **Node.js**: Version 20.10.0. Install from [Node.js website](https://nodejs.org/).
- **npm**: Version 10.2.3. Comes with Node.js installation.
- **Python**: Version 3.10.12. Install from [Python website](https://www.python.org/).
- **pip**: Version 22.0.2. Comes with Python installation.

## Installation

### To locally run the project

Navigate to the Frontend directory to run the react app: The React app will be accessible at http://localhost:3000.

```bash
cd Frontend

# Install dependencies
npm install

# Run the React app
npm start
```

Navigate to the Backend directory to run the flask app: The Flask app will be accessible at http://localhost:5000

```bash
cd Backend

# Create a virtual environment (optional but recommended)
python -m venv venv
# Activate the virtual environment (commands vary by OS)
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask app
python app.py
```

### To locally run the project as Microservices with Docker Compose

Navigate to the root directory:

```bash
# Run Docker Compose to deploy the microservices
docker-compose up -d
```

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

