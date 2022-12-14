'use strict';
const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');
 
// load modules

const morgan = require('morgan');



const app = express();
app.use(express.json());
app.use(cors())
const routes = require('./routes.js');
app.use('/api', routes);

(async () => {
  try {
    // Test the connection to the database
    await sequelize.authenticate();
    console.log('Connection to the database successful!');
    // Sync the models
    console.log('Synchronizing the models with the database...');
    await sequelize.sync();
  } catch(error) {
    throw error;
  }
})();

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app


// setup morgan which gives us http request logging
app.use(morgan('dev'));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});