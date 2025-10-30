DROP DATABASE IF EXISTS Ex4

CREATE DATABASE Ex4

USE Ex4

CREATE TABLE Artigo(
    Código INT NOT NULL,
    Numero_paginas VARCHAR(45) NOT NULL,
    Título VARCHAR(45) NOT NULL,
    Nome_arquivo VARCHAR(45) NOT NULL,
    Resumo VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código)
)

CREATE TABLE Periódo(
    Código INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Qualificação VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código),
    FOREIGN KEY (Artigo_Código) REFERENCES Artigo(Código)
)

CREATE TABLE Palavra_chave(
    Id INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Qualificação VARCHAR(45) NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Artigo_Código) REFERENCES Artigo(Código)
)

CREATE TABLE Autor(
    Código INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    E-mail VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código),
    FOREIGN KEY (Artigo_Código) REFERENCES Artigo(Código)
)

CREATE TABLE Instituição(
    Código INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Endereço VARCHAR(45) NOT NULL,
    PRIMARY KEY (Código),
    FOREIGN KEY (Autor_Código) REFERENCES Autor(Código)
)