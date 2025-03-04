import { UsuarioDelete, UsuarioGet, UsuarioPost } from "../repository/usuarioRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post("/usuario", async (req, resp) => {
    try {
        let obj = req.body;
        let id = await UsuarioPost(obj);

        resp.send({
            id: id
        });

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.get("/usuario", async (req, resp) => {
    try {
        let registros = await UsuarioGet();

        resp.send({
            registros: registros
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.delete("/usuario", async (req, resp) => {
    try {
        let id = req.query;
        let linha = await UsuarioDelete(id);

        if (linha > 0) {
            resp.send()
        }else{
            resp.send({
                erro: "Nenhuma linha encontrada."
            })
        }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default endpoint;