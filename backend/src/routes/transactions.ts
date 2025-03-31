import { Router } from 'express';
import { 
    createTransaction, 
    getTransactions, 
    updateTransaction, 
    deleteTransaction 
} from '../controllers/transactionController';

const router = Router();

// Route to create a new transaction
router.post('/', createTransaction);

// Route to get all transactions
router.get('/', getTransactions);

// Route to update a specific transaction by ID
router.put('/:id', updateTransaction);

// Route to delete a specific transaction by ID
router.delete('/:id', deleteTransaction);

export default router;