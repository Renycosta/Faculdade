/*05 - Listar todos os campos de todos os produtos em ordem alfabética (crescente) de descricao;*/
SELECT * FROM produto 
ORDER BY nome ASC;

/*06 - Listar descricao(nome) e qtdEstoque dos produtos com qtdEstoque menor do que 90;*/
SELECT nome, qtdEstoque FROM produto 
WHERE qtdEstoque < 90;

/*07 - Alterar para Produto esgotado o nome de todos os produtos com qtdEstoque menor ou igual a zero;*/
UPDATE produto
SET nome = 'Produto esgotado'
WHERE qtdEstoque <= 0;

/*08 - Listar a dataVenda e nrNF de todas as vendas em ordem decrescente de dataVenda;*/
SELECT dataVenda, nrNF FROM venda
ORDER BY dataVenda DESC;

/*09 - Alterar para 2024-04-22 a dataVenda de todas as vendas;*/
UPDATE venda
SET dataVenda = '2024-04-22';

/*10 - Listar todos os registros da tabela item, em ordem decrescente de qtdVenda.*/
SELECT * FROM venda_itens
ORDER BY qtdVenda DESC;

/*11 – Liste os produtos que a descrição(nome) comece com a letra C.*/
SELECT * FROM produto
WHERE nome LIKE 'C%';

/*12 – Liste os produtos que contenham de na descrição;*/
SELECT * FROM produto
WHERE nome LIKE '%de%';

/*13 – Liste o valor da maior quantidade em estoque;*/
SELECT MAX(qtdEstoque) FROM produto;

/*14 – Liste o valor médio da quantidade de produtos em estoque;*/
SELECT AVG(qtdEstoque) FROM produto;

/*15 – Liste a quantidade total vendida (soma das quantidades vendidas de todos os produtos);*/
SELECT SUM(qtdVenda) FROM venda_itens;

/*16 – Liste as diferentes quantidades em estoque;*/
SELECT DISTINCT (qtdEstoque) FROM produto;

/*17 – Liste os diferentes valores de produto;*/
SELECT DISTINCT (valor) FROM produto;

/*18 – Liste o valor do produto mais caro;*/
SELECT MAX(valor) FROM produto;

/*19 – Liste o valor do produto mais barato;*/
SELECT MIN(valor) FROM produto;

/*20 – Liste produtos que NÃO comecem com a letra C.*/
SELECT * FROM produto
WHERE nome NOT LIKE 'C%';