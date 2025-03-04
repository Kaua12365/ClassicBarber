export default function ValidarUsuario(req) {
    if (!req.body.nome) throw new Error("Por favor, informe o nome.");
    if (!req.body.telefone) throw new Error("O telefone é obrigatório.");
    if (!req.body.email) throw new Error("Informe um e-mail válido.");
    if (!req.body.senha) throw new Error("A senha não pode ficar em branco.");
}
