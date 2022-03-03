# Para Fixar

#### Manipulação de String:

1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.

3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.

4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.

5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

#### Condicionais 

1. Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

2. Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:

    * G: "Livre para todos";
    * PG: "Não recomendado para menores de 10 anos";
    * PG-13: "Não recomendado para menores de 13 anos";
    * R: "Não recomendado para menores de 17 anos";
    Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".


#### Funções Matemáticas do MySQL

1. Monte uma query que gere um valor entre 15 e 20.

2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

#### Trabalhos com dados

1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.

#### Ultilização para as funções 

1. Monte um query que exiba:
    * A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';

    * A duração mínima dos filmes como 'Duração Mínima';
    A duração máxima dos filmes como 'Duração Máxima';

    * A soma de todas as durações como 'Tempo de Exibição Total';

    * E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

#### GROUP BY

1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.

2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.

3. Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

#### GROUP BY e HAVING

1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

        SELECT rating, AVG(length)
        FROM sakila.film
        GROUP BY rating;

2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

        SELECT rating, SUM(replacement_cost)
        FROM sakila.film
        GROUP by rating;
