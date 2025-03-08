import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import Rotas from './rotas.js';

const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use(cors());

server.use(express.static('public'));

Rotas(server);

server.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
