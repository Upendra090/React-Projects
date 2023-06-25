# Course Management System (Back-end)

Welcome to the back-end of the Course Management System, a web application designed to help manage courses and related tasks. This back-end is built using NodeJS and MySQL.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- Course creation, modification, and deletion
- Assignment and grading management (Coming)
- Dashboard with an overview of courses and tasks (Coming)

## Installation

To run the back-end locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/course-management-system.git
```

2. Navigate to the project directory:

```
cd course-management-system
```

3. Install the dependencies for the back-end:

```
# Install back-end dependencies

cd server
npm install
```

4. Set up the MySQL database:

- Create a new MySQL database.
- Update the database configuration in the server/db/dbConnection.js file.

5. Start the development server:

```
# Start the back-end server

cd server
npm start
```

6. The back-end server will be running on http://localhost:3001.

## User Technology

- NodeJS: A JavaScript runtime environment for server-side development.
- MySQL: A relational database management system for storing data.
- Express: A minimal and flexible Node.js web application framework.
- mysql2: A promise-based ORM for Node.js, used for interacting with the MySQL database.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request explaining your changes.
