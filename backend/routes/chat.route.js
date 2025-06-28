const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');

// POST /api/chat
// Route to handle chat messages
router.post('/', chatController.handleChat);

module.exports = router;