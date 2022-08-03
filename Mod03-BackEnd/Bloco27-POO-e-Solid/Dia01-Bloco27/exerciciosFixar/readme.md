#### Para Fixar

Utilizando o que você já aprendeu até aqui, faça o seguinte exercício:

1. Crie uma classe chamada Tv, com os atributos:

* `brand`: marca da TV;
* `size`: tamanho em polegadas;
* `resolution`: resolução da tela;
* `connections`: conexões disponíveis(HDMI, Ethernet, etc.);
* `connectedTo`: conexão atual  **Este atributo não precisa ser inicializado no construtor** .

2. Dentro da classe Tv, crie o método `turnOn`, que imprimirá os atributos inicializados no construtor.
3. Instancie um objeto a partir da classe Tv, chame o método `turnOn` para imprimir seus atributos.
4. Altere a visibilidade dos atributos definidos na classe Tv para `private`.
5. Crie um método *getter* e um *setter* para o atributo `_connectedTo`, da classe Tv.

* O setter deverá verificar se o valor definido está entre as conexões disponíveis (`_connections`) e:
  * Em caso positivo, definir este valor para o atributo `_connectedTo`;
  * Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"

6. Defina um valor para o atributo `_connectedTo` por meio do método *setter* criado e imprima seu valor.
