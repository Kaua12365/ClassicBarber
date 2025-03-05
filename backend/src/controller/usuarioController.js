import { Login, UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPUT } from "../repository/usuarioRepository.js";
import { Router } from "express";
import ValidarUsuario from '../validation/usuarioValidation.js';

const endpoint = Router();

endpoint.post("/usuario", async (req, resp) => {
    try {
        ValidarUsuario(req);

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
        } else {
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

endpoint.post("/Login", async (req, resp) => {
    try {
        let credenciais = req.body;

        if (!credenciais.email || !credenciais.senha) {
            throw new Error('Usuário e senha são obrigatórios.');
        }

        let login = await Login(credenciais);

        if (login == null) {
            return resp.status(401).send({ erro: "Usuário ou senha incorreto(s)" });
        } else {
            resp.send({
                id: login.id,
                email: credenciais.email,
                telefone: login.telefone,
                senha: credenciais.senha,
                nome: login.nome
            });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoint.put("/usuario", async (req, resp) => {
    try {
        let obj = req.body;
        let id = req.query.id;
        let linha = await UsuarioPUT(obj, id);

        if (linha > 0) {
            resp.send()
        } else {
            resp.send({
                erro: "Nenhuma linha encontrada."
            })
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default endpoint;