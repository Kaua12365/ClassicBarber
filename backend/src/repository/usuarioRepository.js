import con from './connection.js';

export async function UsuarioPost(user) {
    const comando = `INSERT INTO tb_usuarios (nome, telefone, email, senha)
    VALUES (?, ?, ?, ?);
    `

    let resp = await con.query(comando, [user.nome, user.telefone, user.email, user.senha]);
    let infos = resp[0];

    return infos.insertId;
}

export async function UsuarioGet() {
    const comando = `
    select * from tb_usuarios;
    `;

    let resp = await con.query(comando, []);
    return resp[0];
}

export async function UsuarioDelete(user) {
    const comando = `
    DELETE from tb_usuarios
    where id = ?;
    `;

    let resp = await con.query(comando, [user.id]);
    let infos = resp[0];

    return infos.affectedRows;
}