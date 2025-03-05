export default function ValidarAgendamento(req) {
    if (!req.body.nome) throw new Error('O nome do corte está incorreto.');
    if (!req.body.horario) throw new Error('O horário está incorreto.');
    if (req.body.data == null) throw new Error('A data está incorreta.');
}