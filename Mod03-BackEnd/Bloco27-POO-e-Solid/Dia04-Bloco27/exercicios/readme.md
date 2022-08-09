### Agora a prática

#### Iniciando

Esse módulo controla um catálogo de plantas para um instituto de botânica. Você deverá usar o Typescript para adaptar o código de modo a transformá-lo em uma API respeitando os princípios SOLID. Para isso, você deverá modificar o arquivo `Plants.ts`, bem como criar um arquivo `index.ts` para criar sua API com Express.

* Foque nos princípios aprendidos hoje: `Single Responsibility`, `Dependency Inversion` e `Open/Closed`.
* Lembre-se de aproveitar os pilares da Orientação a Objetos quando precisar 😎

Precisamos ter os endpoints:

* `GET /plants`: retorna todas as plantas;
* `GET /plant/:id`: retorna uma planta com o id;
* `DELETE /plant/:id`: deleta uma planta com o id;
* `POST /plant/:id`: sobrescreve a planta com id;
* `POST /plant`: cria uma planta nova;
* `GET /sunny/:id`: retorna uma planta que precisa de sol com o id.

#### Bônus

* Crie um banco de dados para persistir os dados das plantas.
* Divida a aplicação em camadas.

---
