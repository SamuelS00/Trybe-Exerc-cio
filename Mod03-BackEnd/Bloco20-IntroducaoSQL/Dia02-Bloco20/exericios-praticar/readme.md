# Exercicios para praticar

### SELECT

1 - Monte uma query que exiba seu nome na tela;

    SELECT 'Samuel'

2 - Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

    SELECT 'Samuel', 'Silva', 'São Paulo', 20; 

3 - Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);

    SELECT 'Samuel' AS Nome, 'Silva' AS Sobrenome, 'São Paulo' AS 'Cidade Natal', 20 AS 'Idade'; 

4 - Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;

    SELECT 13*8;

5 - Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

    SELECT now() as 'Data Atual';


### CONCAT 

1 - Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

    SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

2 - Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

    SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;

3 - Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

    SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;

### DISTINCT

1 - Monte uma query para encontrar pares únicos de nomes e idade.

    SELECT DISTINCT Nome, Idade FROM Alunos;

2 - Quantas linhas você encontraria na query anterior?

    5

3 - Monte uma query para encontrar somente os nomes únicos.

    SELECT DISTINCT Nome FROM Alunos;

4 - Quantas linhas você encontraria na query anterior?

    4

5 - Monte uma query para encontrar somente as idades únicas.

    SELECT DISTINCT Idade FROM Alunos;

6 - Quantas linhas você encontraria na query anterior?

    4

### COUNT 

1 - Quantas senhas temos cadastradas nessa tabela?

    SELECT COUNT(password) FROM sakila.staff;
    
    // 1

2 - Quantas pessoas temos no total trabalhando para nossa empresa?

    SELECT COUNT(*) FROM sakila.staff;

    // 2

3 - Quantos emails temos cadastrados nessa tabela?

    SELECT COUNT(email) FROM sakila.staff;

    // 2

### Exercicios com todos os aprendizados do dia 20.2

Para os exercícios a seguir, vamos usar a tabela sakila.film

* Escreva uma query que exiba todos os filmes cadastrados no banco de dados.

        SELECT * FROM sakila.film;

* Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.

        SELECT title, release_year, rating FROM sakila.film;

* Quantos filmes temos cadastrados?

        SELECT COUNT(*) FROM sakila.film;

Para os exercícios a seguir, vamos usar a tabela sakila.actor

* Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.

        SELECT DISTINCT last_name FROM sakila.actor;

* Quantos sobrenomes únicos temos na tabela?

        SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

* Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

        SELECT * FROM sakila.actor
        ORDER BY last_name, first_name DESC;

* Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english.

        SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

* Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
    
        SELECT * FROM sakila.film;

* Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

        SELECT title, release_year, rental_duration, rating, replacement_cost FROM film
        ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;
