import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRoute from './Routers/auth.js';
import userRoute from './Routers/user.js';
import doctorRoute from './Routers/doctor.js';
import reviewRoute from './Routers/review.js';

dotenv.config()
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true
}

app.get('/', (req, res) => {
  res.send('API is working');
});


// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database is connected...');
  } catch (err) {
    console.log('MongoDB database connection failed!', err);
  }
};

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//domain/api/v1/auth/register
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server is runining on port ${port}`);
})