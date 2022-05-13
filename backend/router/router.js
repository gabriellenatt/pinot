'use strict';

// Initialization
const express = require('express');
const router = express.Router();

// Journal Router
const { journalRouter } = require('./JournalRouter');

// Export Module
module.exports = { router };