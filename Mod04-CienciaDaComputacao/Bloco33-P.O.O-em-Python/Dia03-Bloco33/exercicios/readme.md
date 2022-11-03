# Exercícios - agora, a prática

**Exercício 1:** Em Python, é possível imprimir uma saída colorida. Para isso, basta a string começar com um código da cor antes e terminar com um código que indica o fim da formatação.

Copiar

```python
1ROSA ="\033[95m"
2ROXO ="\033[94m"
3AZUL ="\033[96m"
4VERDE ="\033[92m"
5LARANJA ="\033[93m"
6VERMELHO ="\033[91m"
7NEGRITO ="\033[1m"
8SUBLINHADO ="\033[4m"
9RESET ="\033[0m"
10
11print("\033[94mOlá Mundo!\033[0m")
12# ou
13print(f"{ROXO}Olá Mundo!{RESET}")
```

> *A cor será diferente dependendo da configuração do seu computador.*

> *O recurso a seguir será utilizado para exibir logs coloridos no sistema. A classe `Log()` abaixo é responsável pela criação dos Logs:*

Copiar

```python
1classLog:
2defdispara_log(message):
3return message
```

* Crie novas classes, `LogError()`, `LogWarning`, `LogSuccess()` com o padrão  **Decorator** , para imprimir colorido as seguintes frases de Log:

> Success(Verde): O sistema está funcionando

> Warning(Laranja): O sistema está lento

> Error(Vermelho): O sistema está com erros

**Exercício 2:** Você está desenvolvendo um novo despertador para Assistente virtual  **Alexa** , utilizando o `Padrão Observer`. Ao despertar, esse despertador aciona algumas rotinas especiais na casa.

* Implemente um objeto `Alarme` que consiga `acionar` as tarefas de rotina previamente cadastradas, sempre que o alarme `despertar`. Veja alguns exemplos de rotinas:
* Acender as luzes;
* Preparar o café;
* Ligar o computador.

> 👀  **De olho na dica** : crie um observador para cada rotina e vincule-o dinamicamente por composição ao objeto  **Alarme** . Assim, quando o despertador tocar todas as rotinas vinculadas serão disparadas automaticamente.

**Exercício 3:** Você recebeu um convite para ajudar com uma atualização de segurança em um sistema interno de uma empresa. Esse sistema atende os setores de  **vendas** , **financeiro** e  **suporte** . Para respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa garantir que as informações internas serão expostas somente a quem tem necessidade. Assim devemos ter os seguintes perfis de acesso:

* **Conta de Suporte:** Acesso apenas ao sistema de **suporte**
* **Conta de Suporte e Vendas:** Acesso aos sistemas **vendas** e **suporte**
* **Conta de Gerente:** Acesso a todos os sistemas  **vendas** , **financeiro** e **suporte**

> 👀  **De olho na dica** : esse problema lembra o de combos na hamburgueria, que você já conhece! Aqui precisamos de uma implementação semelhante, utilizando o padrão  **Factory** .

> 👀  **De olho na dica** : a Account pode ser sua Interface Criadora, que será herdada pelas fábricas, que podem ser classes referentes aos perfis de acessos.
>
