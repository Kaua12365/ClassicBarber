import { Login, UsuarioDelete, UsuarioGet, UsuarioPost, UsuarioPUT, UsuarioIMG } from "../repository/usuarioRepository.js";
import { Router } from "express";
import ValidarUsuario from '../validation/usuarioValidation.js';
import multer from 'multer';
import storage from "../repository/multer.js";

const endpoint = Router();
const m = multer({ storage });

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
                id: login.id_usuario,
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

        if (obj.telefone) {
            let telefoneLimpo = obj.telefone.replace(/\D/g, '');

            if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
                return resp.status(400).send({
                    erro: "Digite um número de telefone válido"
                });
            }
        }

        let linha = await UsuarioPUT(obj, id);

        if (linha > 0) {
            resp.send();
        } else {
            resp.status(404).send({
                erro: "Nenhuma linha encontrada."
            });
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.post('/multer', m.single('img'), async (req, resp) => {
    try {
        const { filename, originalname, mimetype } = req.file;
        const usuarioId = req.body.id;

        if (!usuarioId) {
            return resp.status(400).send({ erro: 'ID do usuário é obrigatório' });
        }

        const updateObj = {
            img: filename
        };

        const linhaAtualizada = await UsuarioIMG(updateObj, usuarioId);

        if (linhaAtualizada > 0) {
            return resp.send({
                fl: filename,
                og: originalname,
                mt: mimetype
            });
        } else {
            return resp.status(404).send({
                erro: 'Usuário não encontrado ou falha ao atualizar imagem'
            });
        }
    } catch (err) {
        console.error(err);
        return resp.status(500).send({
            erro: 'Erro ao processar o upload da imagem',
            mensagem: err.message
        });
    }
});

endpoint.get('/usuario/detalhes', async (req, res) => {
    try {
        const usuarioId = req.query.id;

        if (!usuarioId) {
            return res.status(400).send({ erro: 'ID do usuário é obrigatório' });
        }

        const query = 'SELECT id, nome, telefone, email, img FROM tb_usuarios WHERE id = ?';
        const [usuario] = await pool.execute(query, [usuarioId]);

        if (usuario.length === 0) {
            return res.status(404).send({ erro: 'Usuário não encontrado' });
        }

        const usuarioData = usuario[0];
        const imgPath = usuarioData.img ? `/img/${usuarioData.img}` : null;

        res.send({
            ...usuarioData,
            img: imgPath
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ erro: 'Erro ao buscar dados do usuário', mensagem: err.message });
    }
});



export default endpoint;
