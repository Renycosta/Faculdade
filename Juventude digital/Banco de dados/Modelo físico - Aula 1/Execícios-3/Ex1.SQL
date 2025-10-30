DROP DATABASE IF EXISTS Ex1

CREATE DATABASE Ex1

USE Ex1

CREATE TABLE Comprador(
    CPF INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (CPF) 
)

CREATE TABLE Conjugue(
    CPF INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    FOREIGN KEY(Comprador_CPF) REFERENCES Comprador(CPF)
)

CREATE TABLE Venda(
    Id INT NOT NULL,
    Data_venda DATETIME NOT NULL,
    Valor_venda VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Comprador_CPF) REFERENCES Comprador(CPF)
)

CREATE TABLE Veículo(
    Chassi INT NOT NULL,
    Ano_fabric YEAR NOT NULL,
    Quilometragem VARCHAR(45) NOT NULL,
    Cor VARCHAR(45) NOT NULL,
    Placa VARCHAR(45) NOT NULL,
    PRIMARY KEY (Chassi)
    FOREIGN KEY (Venda_Id) REFERENCES Venda(Id)
)

CREATE TABLE Modelo(
    Registro INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (Registro),
    FOREIGN KEY (Veículo_Chassi) REFERENCES Veículo(Chassi)
)

CREATE TABLE Marca(
    Registro INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    PRIMARY KEY (Registro),
    FOREIGN KEY (Modelo_Registro) REFERENCES Modelo(Registro)
)