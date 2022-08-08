Suponha que você está modelando os personagens do jogo de luta multijogadores  **Super Smash Bros** . No jogo, há personagens de alcances variados e movimentos especiais variados. Vence a pessoa que acumulou mais pontos na partida.

1. Crie uma classe abstrata `Character` que tenha os métodos abstratos `talk(): void` e `specialMove(): void`.
2. Crie a classe concreta `MeleeCharacter` que estenda `Character` e sobrescreva os métodos abstratos dessa classe.
3. Crie a classe concreta `LongRangeCharacter` que estenda `Character` e sobrescreva os métodos abstratos dessa classe.
4. Crie uma função que receba como parâmetro `character: Character` e chame os métodos `talk` e `specialMove` para apresentar o personagem.

Utilize a estrutura a seguir nos exercícios dessa seção:

* `Character` define os atributos básicos de um personagem de um videogame de luta, com o nome do personagem (`name`) e de seu movimento especial (`specialMove`):
* `DbCharacter` estende os atributos da classe `Character` para incluir aqueles existentes no banco de dados.

Copiar

```typescript
interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];
```

1. Crie uma interface chamada `IModel` que defina as operações básicas de um **CRUD** para a entidade `Character`.
2. Crie uma classe `LocalDbModel` que implemente a interface `IModel`.
3. Crie uma classe `CharacterService` que recebe como dependência em seu construtor uma instância do tipo `LocalDbModel` e a utilize em sua lógica de negócio.
4. Refatore `CharacterService` para que possa receber uma instância de qualquer classe que implemente a interface `IModel`.
5. Crie uma classe `MockedDbModel` que implemente `IModel` com uma versão  *mock* .
6. Verifique que a classe `CharacterService` pode receber uma instância tanto de `LocalDbModel` como de `MockedDbModel`.
