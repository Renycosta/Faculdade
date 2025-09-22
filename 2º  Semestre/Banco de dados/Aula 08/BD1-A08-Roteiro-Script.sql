-- Exercício Aula 08 - ALTER TABLE

-- 1) Criar o banco de dados e a tabela veiculo no modelo inicial
DROP DATABASE IF EXISTS aula08;
CREATE DATABASE aula08;
USE aula08;

CREATE TABLE veiculo (
  cor VARCHAR(15),
  ano VARCHAR(4),
  fabricante VARCHAR(20),
  mod_ VARCHAR(20),
  valordecusto DECIMAL(9,2)
);

INSERT INTO veiculo (cor, ano, fabricante, mod_, valordecusto) VALUES
('Prata', '1998', 'Porshe', 'Boxter', 17992.54),
(NULL, '2000', 'Jaguar', 'XJ', 15995.00),
('Vermelho', '2002', 'Cadillac', 'Escalade', 40215.90);

DESC veiculo;
SELECT * FROM veiculo;

-- 2) A tabela possui um planejamento pouco eficaz, pois possui várias falhas.
-- Utilizando o comando ALTER TABLE, escreva um script que transforme a tabela veiculo 
-- na seguinte estrutura e dados apresentados abaixo:

-- ESTRUTURA FINAL ESPERADA:
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int          | NO   | PRI | NULL    | auto_increment |
| chassi     | varchar(30)  | YES  |     | NULL    |                |
| fabricante | varchar(20)  | YES  |     | NULL    |                |
| modelo     | varchar(20)  | YES  |     | NULL    |                |
| cor        | varchar(15)  | YES  |     | NULL    |                |
| ano        | varchar(4)   | YES  |     | NULL    |                |
| valor      | decimal(9,2) | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+

-- DADOS ESPERADOS:
+----+-------------------+------------+----------+----------+------+----------+
| id | chassi            | fabricante | modelo   | cor      | ano  | valor    |
+----+-------------------+------------+----------+----------+------+----------+
|  1 | RNKLK66N33G213481 | Porshe     | Boxter   | Prata    | 1998 | 17992.54 |
|  2 | SAEDA44B175B04113 | Jaguar     | XJ       | NULL     | 2000 | 15995.00 |
|  3 | 3GYEK63NT2G280668 | Cadillac   | Escalade | Vermelho | 2002 | 40215.90 |
+----+-------------------+------------+----------+----------+------+----------+

-- Obs: os comandos ALTER TABLE utilizados devem corrigir:
-- - Nome da coluna "mod_" para "modelo"
ALTER TABLE veiculo RENAME COLUMN mod_ to modelo;

-- - Nome da coluna "valordecusto" para "valor"
ALTER TABLE veiculo RENAME COLUMN valordecusto to valor;

-- - Adição da coluna "id" com AUTO_INCREMENT e PRIMARY KEY
ALTER TABLE veiculo
  ADD COLUMN id INT AUTO_INCREMENT FIRST,
  ADD PRIMARY KEY (id);

-- - Adição da coluna "chassi" na posição correta
-- Obs: os dados da coluna "chassi" devem ser atualizados manualmente após a criação da coluna.
-- - Reordenação ou ajuste de posições se necessário (FIRST, AFTER...)
ALTER TABLE veiculo
  ADD COLUMN chassi VARCHAR(30) AFTER id;

-- 3) Alterar a coluna fabricante para que tenha o tipo VARCHAR(50) 
--     e fique em último lugar na tabela veiculo.
ALTER TABLE veiculo
  MODIFY COLUMN fabricante VARCHAR(50) AFTER valor;

-- 4) Criar uma tabela chamada dono com os seguintes campos:
--     cpf (VARCHAR(11)), nome (VARCHAR(45)), telefone (VARCHAR(20)), cidade (VARCHAR(45))
CREATE TABLE dono(
  cpf VARCHAR(11),
  nome VARCHAR(45),
  telefone VARCHAR(20),
  cidade VARCHAR(45)
);

-- 5) Inserir 3 registros na tabela dono, com dados fictícios válidos.
INSERT INTO dono (cpf, nome, telefone, cidade) VALUES
('42872865438', 'Lucinda Pleiades', '11987721233', 'Bauru'),
('32912865454', 'Ortega Batavo', '53987721264', 'Pelotas'),
('88862865476', 'Plinio Souza', '88987721246', 'Camaquã');

-- 6) Adicionar à tabela dono uma nova coluna chamada id_dono do tipo INT, 
--     posicionada antes das demais colunas, com AUTO_INCREMENT e PRIMARY KEY.
ALTER TABLE dono
  ADD COLUMN id_dono INT AUTO_INCREMENT FIRST,
  ADD PRIMARY KEY (id_dono);

-- 7) Renomear a tabela dono para pessoa.
ALTER TABLE dono RENAME TO pessoa;

-- 8) Excluir todos os registros da tabela pessoa (sem apagar a tabela).
TRUNCATE TABLE pessoa;

-- 9) Inserir 3 novos registros na tabela pessoa.
INSERT INTO pessoa (cpf, nome, telefone, cidade) VALUES
('42872865438', 'Lucinda Pleiades', '11987721233', 'Bauru'),
('32912865454', 'Ortega Batavo', '53987721264', 'Pelotas'),
('88862865476', 'Plinio Souza', '88987721246', 'Camaquã');

-- 10) Adicionar à tabela pessoa uma nova coluna chamada id_veiculo (INT).
ALTER TABLE pessoa
  ADD COLUMN id_veiculo INT;
--     Em seguida, inserir mais 3 registros completos de pessoas, preenchendo também o campo id_veiculo,
--     vinculando cada novo dono a um veículo existente na tabela veiculo.
--     Obs.: os registros inseridos anteriormente (nas questões 5 e 9) devem permanecer com o campo id_veiculo em branco (NULL).
INSERT INTO pessoa (cpf, nome, telefone, cidade, id_veiculo) VALUES
('45861165421', 'Tamara Dutra', '53982921218', 'Cristal', '3'),
('32912865454', 'Ortega Batavo', '53987721264', 'Pelotas', '1'),
('88862865476', 'Plinio Souza', '88987721246', 'Camaquã', '2');

-- 11) Executar os comandos:
SHOW CREATE TABLE veiculo;
-- ESTRUTURA ESPERADA DA TABELA veiculo:
CREATE TABLE veiculo (
  id int NOT NULL AUTO_INCREMENT,
  chassi varchar(30) DEFAULT NULL,
  modelo varchar(20) DEFAULT NULL,
  cor varchar(15) DEFAULT NULL,
  ano varchar(4) DEFAULT NULL,
  valor decimal(9,2) DEFAULT NULL,
  fabricante varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT * FROM veiculo;
-- EXEMPLO DE DADOS da tabela veiculo:
+----+-------------------+----------+----------+------+----------+------------+
| id | chassi            | modelo   | cor      | ano  | valor    | fabricante |
+----+-------------------+----------+----------+------+----------+------------+
|  1 | RNKLK66N33G213481 | Boxter   | Prata    | 1998 | 17992.54 | Porshe     |
|  2 | SAEDA44B175B04113 | XJ       | NULL     | 2000 | 15995.00 | Jaguar     |
|  3 | 3GYEK63NT2G280668 | Escalade | Vermelho | 2002 | 40215.90 | Cadillac   |
+----+-------------------+----------+----------+------+----------+------------+

DESC pessoa;
-- ESTRUTURA ESPERADA DA TABELA pessoa:
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| id_dono    | int         | NO   | PRI | NULL    | auto_increment |
| cpf        | varchar(11) | YES  |     | NULL    |                |
| nome       | varchar(45) | YES  |     | NULL    |                |
| telefone   | varchar(20) | YES  |     | NULL    |                |
| cidade     | varchar(45) | YES  |     | NULL    |                |
| id_veiculo | int         | YES  |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+

SELECT * FROM pessoa;
-- EXEMPLO DE DADOS da tabela pessoa:
+---------+-------------+------------------+-------------+---------+------------+
| id_dono | cpf         | nome             | telefone    | cidade  | id_veiculo |
+---------+-------------+------------------+-------------+---------+------------+
|       1 | 42872865438 | Lucinda Pleiades | 11987721233 | Bauru   |       NULL |
|       2 | 32912865454 | Ortega Batavo    | 53987721264 | Pelotas |       NULL |
|       3 | 88862865476 | Plinio Souza     | 88987721246 | Camaquã |       NULL |
|       4 | 45861165421 | Tamara Dutra     | 53982921218 | Cristal |          3 |
|       5 | 68861265432 | Maigui Aochi     | 11984321521 | Cuiabá  |          1 |
|       6 | 90861865477 | Joselangelo Paz  | 51988921290 | Chuy    |          2 |
+---------+-------------+------------------+-------------+---------+------------+
