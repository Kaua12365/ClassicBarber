import con from "./connection.js";

export async function BarbeiroPost(barber) {
    const comando = `
    insert into tb_barbeiros (nome, telefone, endereco, numero)
    VALUES (?, ?, ?, ?);
    `;

    let resp = await con.query(comando, [barber.nome, barber.telefone, barber.endereco, barber.numero]);
    let infos = resp[0];

    return infos.insertId;
}

export async function BarbeiroGet() {
    const comando = `
    select * from tb_barbeiros;
    `;

    let resp = await con.query(comando);

    return resp[0];
}

export async function BarbeiroDelete(barber) {
    const comando = `
        delete from tb_barbeiros
        where id = ?;
    `;

    let resp = await con.query(comando, [barber.id]);
    let infos = resp[0];

    return infos.affectedRows;
}