const express = require('express');
const cors = require('cors');

const registerMiddleware = (app) => {
    // middleware
    // add "allow all" cors
    app.use(cors());
    // make sure we use json
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true,
    }));
}
module.exports = {registerMiddleware};