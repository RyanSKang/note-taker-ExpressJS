// Defining dependencies
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./controllers/api');
const homeRoutes = require('./controllers/index');
const PORT = process.env.PORT || 3001;

// Adding Middleware
app.use(express.urlencoded({
    extended: true
}));

// Middleware: local CSS and JS
app.use(express.static('public'));
app.use(express.json());

// Middleware: controllers
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

// Console log API server
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});