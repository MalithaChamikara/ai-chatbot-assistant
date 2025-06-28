const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

const port = process.env.PORT || 5000;

// Middlewares list
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies


// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})