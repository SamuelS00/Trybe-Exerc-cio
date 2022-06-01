### Inner join

1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

        SELECT A.actor_id, A.first_name, F.film_id
        FROM sakila.actor AS A
        INNER JOIN sakila.film_actor 
        AS F ON A.actor_id = F.actor_id;

2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

        SELECT s.first_name, s.last_name, a.address, a.district FROM staff AS s
        INNER JOIN address AS a
        ON s.address_id = a.address_id;

3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.

        SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
        FROM customer AS c
        INNER JOIN address AS a
        ON c.address_id = a.address_id
        ORDER BY first_name DESC
        LIMIT 100;

4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

        SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address, a.district
        FROM customer AS c
        INNER JOIN address AS a
        ON c.address_id = a.address_id
        WHERE district = 'California' AND first_name LIKE '%rene%';

5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

        SELECT c.first_name, COUNT(a.address) `qtda de endereço` FROM sakila.customer c
        INNER JOIN sakila.address AS a ON a.address_id = c.address_id
        WHERE c.active = 1
        GROUP BY c.customer_id
        ORDER BY first_name DESC, last_name DESC;

6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

        SELECT s.first_name, s.last_name, s.amount AS 'Média Salarial'
        FROM payment AS p
        INNER JOIN staff AS s
        ON p.staff_id = s.staff_id
        WHERE YEAR(p.payment_date) = 2006
        GROUP BY s.first_Name;

7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

        SELECT A.actor_id, A.first_name, F.film_id, F.title
        FROM sakila.actor AS A
        INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id
        INNER JOIN sakila.film AS F ON F.film_id = FA.film_id;

### Self join

1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.

        SELECT 
            CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
            CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
        FROM hr.employees AS Employee
        INNER JOIN hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
        WHERE Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.

        SELECT
            CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
            COUNT(*)
        FROM hr.employees AS Manager
        INNER JOIN hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
        GROUP BY Manager.EMPLOYEE_ID;