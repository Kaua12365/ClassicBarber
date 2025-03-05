import con from './connection.js';

export async function AgendamentoPOST(agendar) {
    const comando = `
        INSERT INTO tb_agendamentos (nome, horario, data)
        values(?, ?, ?);
    `;

    let resp = await con.query(comando, [agendar.nome, agendar.horario, agendar.data]);
    let infos = resp[0];

    return infos.insertId;
}