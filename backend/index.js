import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './Routers/auth.js';
import userRoute from './Routers/user.js';
import doctorRoute from './Routers/doctor.js';
import reviewRoute from './Routers/review.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// CORS options
const corsOptions = {
  origin: true,
};

// Root API endpoint
app.get('/', (req, res) => {
  res.send('API is working');
});

// Database connection
mongoose.set('strictQuery', false); // Already set, no changes needed
const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB with URL:', process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL); // Removed deprecated options
    console.log('MongoDB database is connected...');
  } catch (err) {
    console.error('MongoDB database connection failed!', err);
    process.exit(1); // Exit process with failure
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

// Start the server
app.listen(port, () => {
  connectDB(); // Connect to the database before handling requests
  console.log(`Server is running on port ${port}`);
});
