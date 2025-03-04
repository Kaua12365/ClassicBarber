export default function ValidarUsuario(req) {
    if(!req.body.nome) throw new Error("O parâmetro Nome está incorreto.");
    if(!req.body.telefone) throw new Error("O parâmetro Telefone está incorreto.");
    if(!req.body.email) throw new Error("O parâmetro Email está incorreto.");
    if(!req.body.senha) throw new Error("O parâmetro Senha está incorreto.");
}