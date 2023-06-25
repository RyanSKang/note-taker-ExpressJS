// Defining modules and API Routes. 
const router= require('express'.Router());
const noteRoutes = require('./noteRoutes');

// Middleware to use noteRoutes
router.use(noteRoutes);

// Exporting
module.exports= router; 