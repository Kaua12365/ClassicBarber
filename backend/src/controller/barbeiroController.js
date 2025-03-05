import { Router } from 'express';
import { BarbeiroDelete, BarbeiroGet, BarbeiroPost } from '../repository/barbeiroRepository.js';
import ValidarBarbeiro from '../validation/barbeiroValidation.js';

const endpoint = Router();

endpoint.post("/barbeiro", async (req ,resp) => {
    try {
        ValidarBarbeiro(req);
        let obj = req.body;
        let id = await BarbeiroPost(obj);

        resp.send({
            id: id
        });

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.get("/barbeiro", async (req, resp) => {
    try {
        let registro = await BarbeiroGet();

        resp.send({
            registro: registro
        });
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.delete("/barbeiro", async (req, resp) => {
    try {
        let id = req.query;
        let linha = await BarbeiroDelete(id);

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