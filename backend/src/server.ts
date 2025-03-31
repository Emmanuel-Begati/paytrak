import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app';  // Import the Express app directly
import dotenv from 'dotenv';

dotenv.config();

const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { io };