import express from 'express';
import session from 'express-session';  // ✅ Add session middleware
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import 'dotenv/config';
import './config/passport.js'; 

// MongoDB and auth middleware imports
import ConnectDB from './config/dbconfig.js';
import authmiddleware from './middleware/authmiddleware.js';

// Import Routes
import UserRouter from './routes/userroute.js';
import CourseRouter from './routes/courserouter.js';
import EnrollRouter from './routes/EnrollRoute.js';

const app = express();

// ✅ Add session middleware (Required for Passport)
app.use(session({
  secret: process.env.GOOGLE_CLIENT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// ✅ Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
ConnectDB();

// APIs
app.get('/', (req, res) => {
  res.json('Welcome to APIs.........');
});

// ✅ Ensure API route prefix is correct
app.use('/user', UserRouter);
app.use('/courses', authmiddleware, CourseRouter);
app.use('/Enroll', authmiddleware, EnrollRouter);

// Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
