
// import env file
require('dotenv').config();

const express = require('express');
const MongoClient = require('./db/MongoClient');
const { registerMiddleware } = require('./middleware/index')
const {  registerRoutes } = require('./routes/index');

// connect with db
const db = new MongoClient();
db.connect();

const app = express();
const port = process.env.NODE_PORT;

// register Middleware
registerMiddleware(app);
// register routes
registerRoutes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const closeServer = () => {
    db.disconnect();
    process.exit();
};

process.on('SIGINT', () => closeServer());
process.on('SIGTERM', () => closeServer());