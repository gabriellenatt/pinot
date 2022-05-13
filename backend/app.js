'use strict';

const { append } = require('express/lib/response');

// Initialization dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('./router/router');

// Routing
app.use('/', router);