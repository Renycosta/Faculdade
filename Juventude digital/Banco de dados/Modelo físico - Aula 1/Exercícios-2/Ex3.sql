DROP DATABASE IF EXISTS Ex3

CREATE DATABASE Ex3

USE Ex3

CREATE TABLE Pessoa(
    Id INT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id)
)

CREATE TABLE Reserva(
    Código INT NOT NULL,
    Classe VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código),
    FOREIGN KEY (Pessoa_Id) REFERENCES Pessoa(Id)
)

CREATE TABLE Voo(
    Código INT NOT NULL,
    Destino VARCHAR(45) NOT NULL,
    Dia DATA NOT NULL,
    Hora TIME NOT NULL,
    Origem VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código),
    FOREIGN KEY (Reserva_Código) REFERENCES Reserva(Código)
)

CREATE TABLE Trecho(
    Id INT NOT NULL,
    Aeronava VARCHAR(45) NOT NULL,
    Aeroporto VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Voo_Código) REFERENCES Trecho(Código)
)