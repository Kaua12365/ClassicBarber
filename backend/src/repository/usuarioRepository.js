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
    where id_usuario = ?;
    `;

    let resp = await con.query(comando, [user.id]);
    let infos = resp[0];

    return infos.affectedRows;
}

export async function Login(user) {
    const comando = `
    select id_usuario, nome, telefone, email, senha
    from tb_usuarios
    where email = ? and
    senha = ?;
    `;

    let resp = await con.query(comando, [user.email, user.senha]);
    let infos = resp[0][0];

    return infos;
}

export async function UsuarioPUT(user, id) {
    const comando = `UPDATE tb_usuarios SET ${[
            user.nome && 'nome = ?',
            user.telefone && 'telefone = ?',
            user.email && 'email = ?',
            user.senha && 'senha = ?'
        ]
        .filter(Boolean)
        .join(', ')
    } WHERE id_usuario = ?`;

    const valores = [
        user.nome, user.telefone, user.email, user.senha
    ].filter(Boolean);

    valores.push(id); 

    const resp = await con.query(comando, valores);
    return resp[0].affectedRows;
}

export async function UsuarioIMG(usuarioData, id) {
        const query = `
            UPDATE tb_usuarios 
            SET img = ? 
            WHERE id_usuario = ?;
        `;
        
        const [result] = await con.execute(query, [usuarioData.img, id]);

        return result.affectedRows;  
}
