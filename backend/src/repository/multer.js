import multer from 'multer';
import { Router } from 'express';

const servidor = Router();

let uploadPerfil = multer({ dest: '/public/img' });

servidor.post("/multer", uploadPerfil.single('imagem'), (req, resp) => {
    let caminho = req.file.path;

    resp.send({
        caminho: caminho
    });
});

export default servidor;
