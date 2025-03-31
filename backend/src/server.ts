import express from 'express';
import { json } from 'body-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';
import appRoutes from './app';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(json());
app.use('/api', appRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { io };