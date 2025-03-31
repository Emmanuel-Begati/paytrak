import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

// Function to fetch all transactions
export const fetchTransactions = async () => {
    try {
        const response = await axios.get(`${API_URL}/transactions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

// Function to add a new transaction
export const addTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_URL}/transactions`, transaction);
        return response.data;
    } catch (error) {
        console.error('Error adding transaction:', error);
        throw error;
    }
};

// Function to update an existing transaction
export const updateTransaction = async (id, transaction) => {
    try {
        const response = await axios.put(`${API_URL}/transactions/${id}`, transaction);
        return response.data;
    } catch (error) {
        console.error('Error updating transaction:', error);
        throw error;
    }
};

// Function to delete a transaction
export const deleteTransaction = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/transactions/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw error;
    }
};