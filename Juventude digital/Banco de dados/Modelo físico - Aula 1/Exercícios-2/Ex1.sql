DROP DATABASE IF EXISTS Ex1

CREATE DATABASE Ex1

USE Ex1

CREATE TABLE Administradora(
    Id INT NOT NULL, 
    Nome VARCHAR(45) NOT NULL,
    Data_nasc DATETIME,
    Certificado VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id)
);

CREATE TABLE Condominio(
    Id INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Administradora_Id) REFERENCES Administradora(Id)
)

CREATE TABLE Unidade_condominial(
    Id INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Condominio_Id) REFERENCES Condominio(Id)
)

CREATE TABLE Pessoa(
    CPF INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Data_nasc DATETIME NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Pessoa_Id) REFERENCES Pessoa(Id)
)