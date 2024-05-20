import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js'


// Configure dotenv at the top before using any environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Router
app.get('/chats', (req, res) => {
    res.send('hello Ashu!');
});
app.use('/api/user',userRouter)
app.use(notfound)
app.use(errorHandler)

// Port listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
