# Bônus

### Exercício 2: Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

        SELECT Piece, Price FROM Provides
        WHERE Provider = 'RBT';

2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

        SELECT * FROM Pieces, Provides
        ORDER BY price DESC LIMIT 5;


3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

        SELECT name, price FROM Providers, Provides
        ORDER BY price DESC LIMIT 4 OFFSET 3;

4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.

        SELECT * FROM Pieces, Provides
        WHERE Provider = 'Hal' ORDER BY price DESC;


5 Escreva uma query para exibir por quantas empresas a peça 1 é provida.

        SELECT COUNT(*) FROM Provides 
        WHERE Piece = 1;
