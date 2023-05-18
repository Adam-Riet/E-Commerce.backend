# E-Commerce.backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This application provides the backend for an e-commerce site. By using a working Express.js API configured to use Sequelize to interact with a MySQL database, this application creates, reads, updates, and deletes (CRUD) data in your database with ease.

## Table of Contents
- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
1. Clone the repository to your local machine using either the SSH or HTTPS URL.

    SSH: git@github.com:Adam-Riet/E-Commerce.backend.git
    HTTPS: https://github.com/Adam-Riet/E-Commerce.backend.git

2. Navigate to the project directory in your terminal by running `cd ecommerce_backend`.
3. If you haven't already, install Node.js on your machine. You can download it from the official website: https://nodejs.org/.
4. Install the necessary dependencies by running `npm install` in your terminal. This command installs the required packages listed in the `package.json` file.
5. You will need to have MySQL installed on your machine. Run the commands from the db/schema.sql file in your MySQL client to create the necessary database.
6. Create a .env file in your root directory and populate it with your MySQL user name and password in the following format:
DB_NAME='ecommerce_db'
DB_USER='your_username'
DB_PW='your_password'
7. Seed the database by running npm run seed in your terminal.
8. Once the installation is complete, run node server.js in your terminal to start the application.

## Demo
Watch this video to see a demonstration of how to run the application once you have followed the installation instructions:

[Click here to watch the demo video](https://drive.google.com/file/d/1GmfDXAt3PnA787xQVsesoMmBSvxREfSF/view?usp=sharing)

## Usage
1. Open your terminal.
2. Navigate to the project directory.
3. Run `node server.js`.
4. Use an API testing tool like Insomnia Core or Postman to test the various CRUD operations for products, tags, and categories.
* Make sure the server is running before attempting to make requests.
5. Follow along with the provided demo video to understand how each route works.

## Credits
This E-Commerce Backend application was made possible with the following resources:

* Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, for creating scalable and efficient applications.
* Express.js: A fast, unopinionated, minimalist web framework for Node.js.
* Sequelize: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* MySQL2: A MySQL client for Node.js with a focus on performance.

## License
MIT https://opensource.org/licenses/MIT
