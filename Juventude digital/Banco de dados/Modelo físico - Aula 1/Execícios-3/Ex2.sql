DROP DATABASE IF EXISTS Ex2

CREATE DATABASE Ex2

USE Ex2

CREATE TABLE Aluno(
    Mátricula INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Telefone VARCHAR(45) NOT NULL,
    Turma VARCHAR(45) NOT NULL,
    PRIMARY KEY (Mátricula)
)

CREATE TABLE Emprestimo(
    Id INT NOT NULL,
    Data_devolução DATETIME NOT NULL,
    Data_emprestimo DATETIME NOT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (Aluno_Mátricula) REFERENCES Aluno(Mátricula)
) 

CREATE TABLE Livro(
    ISBN INT NOT NULL,
    Nome VARCHAR(45) NOT NULL,
    Nome_autor VARCHAR(45) NOT NULL,
    Editora VARCHAR(45) NOT NULL,
    Ano_public DATETIME NOT NULL,
    PRIMARY KEY (ISBN),
    FOREIGN KEY (Aluno_Mátricula) REFERENCES Aluno(Mátricula),
    FOREIGN KEY (Emprestimo_Id) REFERENCES Emprestimo(Id)
)

CREATE TABLE Área(
    Id INT NOT NULL,
    Policial BOOLEAN,
    Ficção BOOLEAN,
    Romance BOOLEAN,
    PRIMARY KEY (Id),
    FOREIGN KEY (Livro_Nome) REFERENCES Livro(Nome)
)