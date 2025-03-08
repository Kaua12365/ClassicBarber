import con from './connection.js';

export async function AgendamentoPOST(agendar) {
    const comando = `
        INSERT INTO tb_agendamentos (nome, horario, data, id_usuario)
        values(?, ?, ?, ?);
    `;

    let resp = await con.query(comando, [agendar.nome, agendar.horario, agendar.data, agendar.id]);
    let infos = resp[0];

    return infos.insertId;
}

export async function QuantidadeAgendamento(id) {
    const comando = `
        SELECT COUNT(*) AS total_agendamentos FROM tb_agendamentos
        where id_usuario = ?;
    `;

    let resp = await con.query(comando, [id]);
    let infos = resp[0];

    return infos;
}
