import { Request, Response } from 'express';
import { prisma } from '../app';  // Import the global Prisma client

// Fetch all transactions
export const getTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
};

export const createTransaction = async (req: Request, res: Response) => {
    const { amount, sender, date } = req.body;

    try {
        // Convert string date to Date object if needed
        const parsedDate = date ? new Date(date) : new Date();
        
        // Log the received data for debugging
        console.log("Creating transaction with data:", { amount, sender, date, parsedDate });
        
        const newTransaction = await prisma.transaction.create({
            data: {
                // Use the amount directly if it's already a number
                amount: typeof amount === 'number' ? amount : parseFloat(amount),
                sender,
                date: parsedDate,
            },
        });
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error("Transaction creation error:", error);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
};

// Update an existing transaction
export const updateTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { amount, sender, date } = req.body;

    try {
        const updatedTransaction = await prisma.transaction.update({
            where: { id: Number(id) },
            data: {
                amount,
                sender,
                date,
            },
        });
        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update transaction' });
    }
};

// Delete a transaction
export const deleteTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.transaction.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete transaction' });
    }
};