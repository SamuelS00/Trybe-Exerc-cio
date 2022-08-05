##### Para fixar:

Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples? Juro que parece muita coisa, mas não é!

* Crie uma classe chamada  *Superclass* .
* A *Superclass* deve possuir um atributo público *isSuper*
* *isSuper* deve ser setado como `true` na inicialização.
* A *Superclass* deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
* Crie uma classe chamada *Subclass* que herda da  *Superclass* .
* Crie uma função `myFunc` fora do escopo da *Subclass* que recebe um objeto da  *Superclass* .

  * Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
* Crie um objeto da *Superclass* e outro da  *Subclass* .
* Chame a função `myFunc` 2 vezes, passando os objetos criados.
* Comente a criação da instância da  *Superclass* .
* Comente a chamada da função que recebe o objeto do tipo *Superclass* como argumento.
* Faça a função receber não mais um objeto da  *Superclass* , mas sim da  *Subclass* .
* Crie, na  *Subclass* , um método público chamado `sayHello2`.
* Chame o método `sayHello` dentro do método `sayHello2`.
* Mude a visibilidade do método `sayHello` de *public* para  *protected* .
* Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
* Mude a visibilidade do método `sayHello` de *protected* para  *private* . O que acontece?
* No construtor da  *Subclass* , o atributo *isSuper* deve ser setado como `false`. Você vai precisar utilizar o  *super* .
* Dentro da função que recebe um objeto da *Superclass* como parâmetro, cheque o valor do atributo *isSuper* e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
* Crie uma interface chamada  *MyInterface* .
* *MyInterface* deve possuir um atributo `myNumber` do tipo  *number* .
* *MyInterface* deve possuir um método `myFunc`, que recebe um parâmetro `myParam` do tipo *number* e retorna uma  *string* .
* Crie uma classe *MyClass* que implementa  *MyInterface* .
* Faça o atributo `myNumber` ser inicializado diretamente nos parâmetros do construtor da  *MyClass* .
* Faça o método `myFunc` somar o `myNumber` com o `myParam` e retornar uma string qualquer que contenha a soma.
* Crie um objeto da classe *MyClass* e o utilize acessando `myNumber` e chamando `myFunc`.
* Crie uma interface  *Logger* .
* *Logger* deve possuir um método `log`, que recebe um parâmetro do tipo *string* e não retorna nada ( *void* ).
* Crie uma classe *ConsoleLogger* que implementa  *Logger* . Você deve imaginar como o método `log` deve ser implementado, né? 😁.
* Crie uma classe *ConsoleLogger2* igual à classe anterior, apenas a título de exemplo.
* No `console.log` dentro do método `log`, diferencie o *ConsoleLogger2* do  *ConsoleLogger* .
* Crie uma interface  *Database* .
* *Database* deve possuir um atributo do tipo `Logger`.
* *Database* deve possuir um método `save`, que recebe dois parâmetros, `key` e `value`, ambos  *strings* , e não retorna nada ( *void* ).
* Crie uma classe *ExampleDatabase* que implementa  *Database* .
* *ExampleDatabase* deve receber o *Logger* como parâmetro do construtor, e possuir como valor padrão um  *ConsoleLogger* .
* Dentro do método `save`, chame a função `log` do *Logger* passado para o database para fazer o log dos parâmetros passados para a `save`.
* Crie um objeto de cada um dos  *Loggers* .
* Crie três objetos da  *ExampleDatabase* , cada um dos dois primeiros recebendo um dos  *Loggers* , e o último não recebendo nenhum.
* Utilize todos eles para salvar um conteúdo fictício.
*
