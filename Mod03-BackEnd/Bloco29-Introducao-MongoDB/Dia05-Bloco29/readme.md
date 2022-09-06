🚀 **Exercício 1:** Adicione a categoria `"superhero"` ao filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex1-be6de5791e461b149a149efdb81b8731.png)

```
db.movies.updateOne(
  { title: 'Batman'},
  { 
    $push: { category: 'superhero' }
  }
)
```

**Exercício 2:** Utilizando o modificador `$each`, adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex2-4e7e0964cd8a9a6c4d66620f2052d7f6.png)

```
db.movies.updateOne(
  { title: 'Batman'},
  { 
    $push: { 
      category: {
        $each: [
          category: 'villain',
          category: 'comic-based',
        ]
      }
    }
  }
)
```

🚀 **Exercício 3:** Remova a categoria `"action"` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex3-734d650ffb208e2560e330fe090adb60.png)

```

db.movies.updateOne({ $pull: { category: 'action' }});
```

🚀 **Exercício 4:** Remova o primeiro elemento do *array* `category` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

```
db.movies.updateOne({ title: 'Batman' }, { $pop: { category: -1 }});
```

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex4-dfde1c0e79adc538f154db879909ac6e.png)

🚀 **Exercício 5:** Remova o último elemento do *array* `category` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex5-e94ea6ff4d4813f0bf4d1626c495db04.png)

```
db.movies.updateOne({ title: 'Batman'}, { $pop: { category: 1 }});
```

🚀 **Exercício 6:** Adicione o elemento `"action"` ao *array* `category` do filme `Batman`, garantindo que esse valor não se duplique.

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex6-e57ad8e1f37acbdb8e0800474b9d44e4.png)

```
db.movies.updateOne({ title: 'Batman'}, { $addToSet: { category: 'action' }});
```

**Exercício 7:** Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` e do filme `Home Alone` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex7-447424764b48a989e6ccb1b9baa8c70d.png)

```
db.movies.updateMany(
  { title: { $in: ['Batman', 'Home Alone'] }}, { $addToSet: { category: '90\'s' }}
);
```

**Exercício 8:** Crie um *array* de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

Copiar

```javascript
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Home Alone` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex8-5e72173bf664e563fc58edb77f80c197.png)

```
db.movies.updateOne(
  { title: 'Home Alone' }, 
  { $push: { 
      cast: {
        $each: [
          {
            'actor': 'Macaulay Culkin',
            'character': 'Kevin'
          },
          {
            'actor': 'Joe Pesci',
            'character': 'Harry'
          },
          {
            'actor': 'Daniel Stern'
          } 
        ]
      },
    },
  },
  { upsert: true },
);

```

🚀 **Exercício 9:** Adicione o campo `character` com o valor `Marv` ao *array* de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

 **Dica** : [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()`, o resultado do filme `Home Alone` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex9-17900f045cc4c5b86ddda2a3de475e4d.png)

```
db.movies.updateOne(
  { title: 'Home Alone', 'cast.actor': 'Daniel Stern' }, 
  { 
    $set: { 'cast.$.character': 'Marv' },
  },
);
```

🚀 **Exercício 10:** Crie um *array* de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

Copiar

```javascript
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex10-aa8e2335f8f723259a6d6fb409584cc3.png)

```
db.movies.updateOne(
  { title: 'Batman' }, 
  { $push: { 
      cast: {
        $each: [
          {
            "character": "Batman"
          },
          {
            "character": "Alfred"
          },
          {
            "character": "Coringa"
          }
        ]
      },
    },
  },
  { upsert: true },
);
```

**Exercício 11:** Produza três *querys* para o filme `Batman`:

* Adicione o campo `actor`, que deve ser um *array* com o valor `Christian Bale`, ao *array* de `cast` em que o campo `character` seja igual a `Batman`;
* Adicione o campo `actor`, que deve ser um *array* com o valor `Michael Caine`, ao *array* de `cast` em que o campo `character` seja igual a `Alfred`;
* Adicione o campo `actor`, que deve ser um *array* com o valor `Heath Ledger`, ao *array* de `cast` em que o campo `character` seja igual a `Coringa`.

 **Dica** : [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex11-3149adea4236b717af8668bd6bf164fe.png)

```
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: { "cast.$.actor": "Christian Bale" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: { "cast.$.actor": "Michael Caine" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: { "cast.$.actor": "Heath Ledger" },
  },

```

🚀 **Exercício 12:** Adicione aos atores de `cast` do `character` `Batman` do filme `Batman` os valores `"Michael Keaton"`, `"Val Kilmer"` e `"George Clooney"`, e deixe o *array* em ordem alfabética.

 **Dica** : [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![Shell Image](https://assets.app.betrybe.com/back-end/mongodb/complex-updates/images/ex12-25309b91e380da91ebaf06655851da3e.png)
