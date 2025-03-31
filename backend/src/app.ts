import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import transactionRoutes from './routes/transactions';
import authRoutes from './routes/auth';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'API is running' });
});

export default app;