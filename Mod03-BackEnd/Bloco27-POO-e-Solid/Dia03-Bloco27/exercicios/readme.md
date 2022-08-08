### Agora a prática

Nosso software escolar desenvolvido nos exercícios dos dias anteriores ainda não está completo, e com os conhecimentos que adquirimos nesse dia podemos deixá-lo ainda mais conciso dentro do paradigma de orientação a objetos. Por isso, iremos mais uma vez refatorar algumas partes do nosso sistema aplicando os novos conceitos de polimorfismo apresentados no dia de hoje e criar novas funcionalidades.

 **Importante** : Devido uma restrição em transpilar arquivos `.ts` para `.js` em versões posteriores ao ES5. Utilize o seguinte comando para executar a transpilação corretamente:

Copiar

```bash
npx tsc -t es5 ./index.ts
```

 **Notação** : Vamos continuar utilizando a notação adotada nos exercícios do dia anterior para dispor a modelagem dos nossos componentes do sistema.

Copiar

```md
`Class`: Nome da classe, caso seja uma classe
`Interface`: Nome da interface, caso seja uma interface
`Extends`: Classe a qual herda, caso exista
`Implements`: Interfaces a qual implementa, caso exista
`Attributes`: Atributos
`Methods`: Métodos
`Validations`: Validações que devem ser aplicadas aos atributos
```

Ainda sobre a notação, vamos adicionar informações aos nossos componentes em relação ao encapsulamento, por exemplo, `Abstract` caso se trate de uma classe ou método abstrato.

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀  **Exercício 1** : A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.

🚀  **Exercício 2** : Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:

 **A** : Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.

 **B** : Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.

 **C** : Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

Nossa nova modelagem para esses componentes ficará assim:

Copiar

```md
`Interface`: Enrollable
`Attributes`:
    - enrollment: identificador único da matrícula
`Methods`:
    - generateEnrollment: retorna uma string única gerada como matrícula
```

Copiar

```md
`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - examsGrades: notas de provas
    - worksGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
```

Copiar

```md
`Class`: Employee
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - salary: valor do salário
    - admissionDate: data de admissão
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```

Copiar

```md
`Class`: Teacher
`Extends`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
```

Para testar crie duas pessoas estudantes e duas pessoas professoras.

 **Exercício 3** : Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma única lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.

Copiar

```md
`Class`: Evaluation
`Attributes`:
    - score: nota da avaliação
    - teacher: pessoa professora
    - type: tipo da avaliação
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
`Validations`:
    - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
    - A pontuação não pode ser negativa
    - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
    - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos
```

Copiar

```md
`Class`: EvaluationResult
`Attributes`:
    - evaluation: a avaliação
    - score: a nota da pessoa estudante
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode ser maior que a pontuação da avaliação.
```

Copiar

```md
`Class`: Student
`Extends`: Person
`Implements`: Enrollable
`Attributes`:
    - evaluationsResults: lista de resultados de avaliações
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrades: retorna a média das notas da pessoa estudante
    - addEvaluationResult: adiciona um novo resultado de avaliação a lista
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
```

 **Exercício 4** : Ótimo! Já evoluímos bastante nosso sistema escolar, mas ainda há algumas melhorias a serem feitas. Nossa classe de avaliação está carregando muita responsabilidade tendo que lidar com tipos diferentes de avaliação. Então, vamos refatorar nosso sistema pra que cada tipo de avaliação passe a ser uma especialização da nossa classe de avaliação e, assim como para nossa classe de pessoa, não faz sentido termos instâncias de avaliação no nosso sistema somente de suas especializações.

Copiar

```md
`Abstract Class`: Evaluation
`Attributes`:
    - score: nota da avaliação
    - teacher: pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa
```

Copiar

```md
`Class`: Exam
`Extends`: Evaluation
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 25 pontos
```

Copiar

```md
`Class`: Work
`Extends`: Evaluation
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pontuação, a pessoa professora
`Validations`:
    - A pontuação não pode ser negativa
    - A pontuação não pode passar de 50 pontos
```

Para testar crie 2 avaliações para cada pessoa professora criada no exercício 2, uma do tipo prova e outra do tipo trabalho, e adicione um resultado para cada avaliação para as duas pessoas estudantes que também foram criadas no exercício 2.

 **Exercício 5** : Você se lembra daquele pequeno software de uma lanchonete que nós começamos a construir no primeiro dia? Então, vamos retomá-lo agora. A nossa escola possui uma lanchonete e, pra fazer a gerência da mesma, vamos adicionar ao nosso sistema escolar um módulo de lanchonete. Para isso precisamos transportar nossas classes referentes a lanchonete para dentro dele, fazendo algumas alterações para alinhá-lo melhor com a realidade da nossa escola.

Toda pessoa da nossa escola passa a ser uma pessoa cliente da nossa lanchonete. Sendo assim, não precisamos mais da nossa classe de pessoa cliente, e precisamos mudar o tipo de cliente no pedido para o tipo pessoa. Então, vamos alterar nossas classes do módulo de lanchonete para que contemple isso. Nossa modelagem inicial será essa:

Copiar

```md
`Class`: OrderItem
`Attributes`:
    - name: nome do produto
    - price: preço do produto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro o nome do produto e o preço.
`Validations`:
    - O nome do produto deve conter pelo menos 3 caracteres
    - O preço não pode ser negativo
```

Copiar

```md
`Class`: Order
`Attributes`:
    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o desconto caso exista
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
`Validations`:
    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O desconto não pode ser negativo
```

Para testar realize um pedido para cada pessoa criada no nosso exercício 2 em nossa lanchonete.

 **Exercício 6** : Agora vamos gerar alguns relatórios das vendas da lanchonete da escola em nosso sistema. Para isso, crie uma classe onde trataremos como um repositório para nossos pedidos (você não precisa se atentar para essa nomenclatura nesse momento). Essa classe terá uma lista com os pedidos realizados. Além disso, teremos os seguintes métodos:

* Adicionar pedido (que adiciona um pedido a lista);
* Remover pedido (que remove um pedido da lista);
* Buscar pedido por cliente (que recebe uma pessoa cliente por parâmetro e busca todos os pedidos dela);
* Ordenar pedidos por valor (que recebe por parâmetro uma ordem e devolve a lista de pedidos ordenada por valor do maior para o menor ou vice-versa).

Copiar

```md
`Class`: OrderRepository
`Attributes`:
    - orders: lista de pedidos
`Methods`:
    - addOrder: recebe um pedido por parâmetro e adiciona a lista
    - removeOrder: recebe um pedido por parâmetro e o remove da lista
    - listByClient: recebe uma pessoa cliente por parâmetro e devolve todos os pedidos dela
    - listBySortedValue: recebe por parâmetro uma string, podendo ser "maior" ou "menor" e retorna a lista de pedidos ordenada do maior valor para o menor ou vice-versa
```

Além disso vamos precisar também alterar nossa classe de pedido para adicionarmos um identificador único a cada pedido e a data em que o pedido foi realizado:

Copiar

```md
`Class`: Order
`Attributes`:
    - id: identificador único do pedido
    - createdAt: data em que o pedido foi criado
    - client: pessoa cliente
    - items: os itens consumidos
    - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
    - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o desconto caso exista, além disso deve setar o valor para o id e a data de criação do pedido
    - calculateTotal: retorna o valor total do pedido
    - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
`Validations`:
    - O identificador do pedido deve ser um número único gerado aleatoriamente
    - A data do pedido não pode ser no futuro
    - A pessoa cliente deve ser uma instância da nossa classe pessoa
    - O pedido deve ter pelo menos um item
    - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
    - O desconto não pode ser negativo
```

---
