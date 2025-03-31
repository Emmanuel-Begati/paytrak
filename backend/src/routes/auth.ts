import { Router } from 'express';
import { login, signup } from '../controllers/authController';

const router = Router();

// Route for user signup
router.post('/signup', signup);

// Route for user login
router.post('/login', login);

export default router;