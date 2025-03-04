INSERT INTO tb_usuarios (nome, telefone, email, senha)
VALUES ('Diego', '11999999999', 'diego@email.com', 'senha123');

INSERT INTO tb_barbeiros (nome, telefone, endereco, numero)
VALUES ('Carlos Silva', '11988887777', 'Rua das Palmeiras', 316);

select * from tb_usuarios;

select * from tb_barbeiros;

delete from tb_barbeiros
where id = ?;

delete from tb_usuarios
where id = ?;