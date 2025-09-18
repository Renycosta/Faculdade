DROP DATABASE IF EXISTS a05;
CREATE DATABASE a05;
USE a05;

CREATE TABLE produtos (
    codigo  INT AUTO_INCREMENT,
    nome    VARCHAR(100),
    preco   DECIMAL(10,2),
        PRIMARY KEY (codigo)
);

CREATE TABLE clientes (
    codigo      INT AUTO_INCREMENT,
    nome        VARCHAR(100) NOT NULL,
    email       VARCHAR(100),
    telefone    CHAR(20),
    cidade      VARCHAR(100),
        PRIMARY KEY (codigo)
);

INSERT INTO clientes (nome, email, telefone, cidade)
VALUES ('Clarinda Nunes', 'clarinda.nunes@email.com', '567-1234', 'Pelotas');