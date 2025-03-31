import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import transactionRoutes from './routes/transactions';
import authRoutes from './routes/auth';

// Create a global Prisma client to be used throughout the app
export const prisma = new PrismaClient();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/auth', authRoutes);

// Health check route with database
app.get('/api/test-db', async (req, res) => {
    try {
        await prisma.$connect();
        res.status(200).json({ message: 'Database connection successful' });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ error: 'Failed to connect to database' });
    }
});

// Add a health check route that doesn't require database
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

export default app;