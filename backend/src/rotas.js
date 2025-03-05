import usuarioController from "./controller/usuarioController.js"
import barbeiroController from "./controller/barbeiroController.js";
import agendamentoController from './controller/agendamentoController.js';

export default function Rotas(server) {
    server.use(usuarioController);
    server.use(barbeiroController);
    server.use(agendamentoController);
}