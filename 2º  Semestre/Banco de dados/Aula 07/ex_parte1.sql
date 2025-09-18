/*01 - Criar a modelagem física (MySQL ou PostgreSQL) para o diagrama apresentado. Observe,
atentamente, os tipos de dados de cada campo, as chaves primárias, as chaves estrangeiras e os
campos obrigatórios.*/
DROP DATABASE IF EXISTS Aula07;
CREATE DATABASE Aula07;
SHOW DATABASES;
USE Aula07; 

CREATE TABLE produto (
codigo INT,
nome VARCHAR(45) NOT NULL,
valor DECIMAL(10,2),
qtdEstoque INT,
PRIMARY KEY (codigo)
);

CREATE TABLE venda (
id INT,
dataVenda DATE NOT NULL,
nrNF VARCHAR(45),
PRIMARY KEY (id)
);

CREATE TABLE venda_itens (
produto_codigo INT,
venda_id INT,
qtdVenda INT,
PRIMARY KEY (produto_codigo, venda_id), 
FOREIGN KEY (produto_codigo) REFERENCES produto(codigo),
FOREIGN KEY (venda_id) REFERENCES venda(id)
);

/*02 - Cadastrar 18 produtos (sugestão nos slides seguintes);*/
INSERT INTO produto (codigo, nome, valor, qtdEstoque)
VALUES 
    ('1', 'Camiseta Polo', '49.99', '100'),
    ('2', 'Calça Jeans', '89.99', '0'),
    ('3', 'Vestido Floral', '69.99', '60'),
    ('4', 'Moletom com Capuz', '79.99', '70'),
    ('5', 'Sapato Social ', '149.99', '40'),
    ('6', 'Bolsa de Couro', '99.99', '90'),
    ('7', 'Óculos de Sol', '59.99', '110'),
    ('8', 'Jaqueta de Couro', '199.99', '30'),
    ('9', 'Saia Plissada', '39.99', '80'),
    ('10', 'Blusa de Tricô', '49.99', '70'),
    ('11', 'Calçado Infantil', '29.99', '120'),
    ('12', 'Blazer Feminino', '89.99', '50'),
    ('13', 'Calça Social', '79.99', '60'),
    ('14', 'Relógio de Pulso ', '149.99', '40'),
    ('15', 'Bermuda Esportiva', '34.99', '0'),
    ('16', 'Meia Esportiva', '9.99', '150'),
    ('17', 'Chapéu de Praia', '19.99', '100'),
    ('18', 'Carteira de Couro', '39.99', '80');

/*03 - Cadastrar 3 Vendas (sugestão nos slides seguintes);*/
INSERT INTO venda (id, dataVenda, nrNF)
VALUES 
    ('1', ' 2025-05-20', ' 523B'),
    ('2', '2025-05-20', ' 843A '),
    ('3', '2025-05-20', ' 423C ');

/*04 - Cadastrar 10 itens de venda (sugestão nos slides seguintes);*/
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda)
VALUES 
    ('4', '1', '10'),
    ('1', '1', '5'),
    ('3', '1', '6'),
    ('2', '2', '9'),
    ('4', '2', '5'),
    ('1', '2', '10'),
    ('3', '3', '6'),
    ('2', '3', '9'),
    ('1', '3', '6'),
    ('9', '3', '9');