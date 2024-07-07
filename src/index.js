import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { connect } from './config/database.js'; 
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    data: {},
    err: err
  });
});

app.listen(3000, async () => {
  console.log('Server Started');
  await connect();
  console.log('MongoDB connected');
});
