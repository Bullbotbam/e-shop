# e-shop

An e-commerce app
[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()
<br />

  <h1 align="center"> e-Shop</h1>
     
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Purpose](#purpose)
  - [License](#license)
  - [Tests](#tests)
  - [Links](#links)
  ## Description
   This is a program that allows someone to create, track and edit an ecommerce site from a command line program run in Node.js.
  ## Installation

To run this application you will need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Step 1 - after loading the dependencies (packages) run the server.

```
npm start
```

Step 2 - use the schema.sql file in the db folder to create your database using the following MySQL shell commands.

To log into MySql:

```
mysql -u root -p
password:
```

Once you are in MySql grab the correct database:

```
mysql> USE ecommerce_db;
```

Update the schema using this command:

```
mysql> source db/schema.sql;
```

Step 3 - return to Node to input seeds to database:

```
npm run seeds
```

You can now use the app on the back end to keep track of products.

## Purpose

This build is the back end for an e-commerce site. Where a manager of an internet retail company can use the latest technology to compete with ecommerce companies.

## License

![Not Licensed](https://img.shields.io/badge/license--tertiary)
<br />
This application is not covered by any license.

## Testing

[![](/e-shop/assets/ecommerce_pic1.png)](https://youtu.be/IJv6VTQIGtA)
This is the walk through of the app in VS Code

[![](/e-shop/assets/ecommerce_pic2.png)](https://youtu.be/2gjWMWcDCLg)
This is the walk through of the app on Insomnia

## Links

- [The e-Shop App ~ Video Demo](https://youtu.be/IJv6VTQIGtA)
