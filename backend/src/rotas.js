import usuarioController from "./controller/usuarioController.js"
import barbeiroController from "./controller/barbeiroController.js";

export default function Rotas(server) {
    server.use(usuarioController);
    server.use(barbeiroController);
}