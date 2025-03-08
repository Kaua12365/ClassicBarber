CREATE DATABASE classic_barber;

USE classic_barber;

CREATE TABLE tb_usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    img varchar(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_barbeiros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    numero INT NOT NULL UNIQUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_agendamentos (
    id_agendamento int primary key AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    horario TIME NOT NULL,
    data date NOT NULL,
    id_usuario int,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    foreign key(id_usuario) references tb_usuarios(id_usuario)
);

select * from tb_usuarios;
select * from tb_barbeiros;
select * from tb_agendamentos;

SELECT nome, COUNT(*) AS total_agendamentos
FROM tb_agendamentos
where id_usuario = 1;
