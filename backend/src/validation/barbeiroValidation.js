export default function ValidarBarbeiro(req) {
    if (!req.body.nome) throw new Error("Por favor, informe o nome.");
    if (!req.body.telefone) throw new Error("O telefone é obrigatório.");
    if (!req.body.endereco) throw new Error("Informe um endereço válido.");
    if (!req.body.numero) throw new Error("O número não pode ficar em branco.");
}
