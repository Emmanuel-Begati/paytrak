import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Transaction {
    id: number;
    amount: number;
    sender: string;
    date: Date;
}

export const createTransaction = async (transactionData: Omit<Transaction, 'id'>) => {
    return await prisma.transaction.create({
        data: transactionData,
    });
};

export const getTransactions = async () => {
    return await prisma.transaction.findMany();
};

export const getTransactionById = async (id: number) => {
    return await prisma.transaction.findUnique({
        where: { id },
    });
};

export const updateTransaction = async (id: number, transactionData: Partial<Omit<Transaction, 'id'>>) => {
    return await prisma.transaction.update({
        where: { id },
        data: transactionData,
    });
};

export const deleteTransaction = async (id: number) => {
    return await prisma.transaction.delete({
        where: { id },
    });
};