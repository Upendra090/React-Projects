# Course Management System

Welcome to the Course Management System, a web application designed to help manage courses and related tasks. This application is built using <strong>ReactJS</strong> for the front-end, <strong>NodeJS</strong> for the back-end, and <strong>MySQL</strong> for the database.

<br>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- Course creation, modification, and deletion
- Assignment and grading management (Coming)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Kr-Upendra/React-Projects.git
```

2. Navigate to the project directory:

```
cd "Course Management System"
```

3. Install the dependencies for the front-end and back-end:

```
# Install front-end dependencies
cd client
npm install

# Install back-end dependencies
cd ../server
npm install
```

4. Set up the MySQL database:

- Create a new MySQL database.
- Update the database configuration in the server/db/dbConnection.js file.

5. Start the development servers:

```
# Start the front-end server
cd client
npm start

# Start the back-end server
cd ../server
npm start
```

6. Open your web browser and navigate to http://localhost:${port} to access the application.

## Technologies Used

The following technologies were used in the development of this application:

- ReactJS: A JavaScript library for building user interfaces.
- NodeJS: A JavaScript runtime environment for server-side development.
- MySQL: A relational database management system for storing data.
- Express: A minimal and flexible Node.js web application framework.
- mysql2: An npm package to intract with MYSQL DATABASE.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.
