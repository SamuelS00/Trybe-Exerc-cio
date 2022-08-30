## Operadores de comparação

1. Selecione e faça a contagem dos restaurantes presentes nos bairros **Queens,** **Staten Island** e  **Bronx** . (utilizando o atributo `borough`)
   ```
   db.restaurants.countDocuments({ borough: { $in: [  'Queens', 'Staten Island','Bronx' ] }});

   ```
2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo  **American** . (utilizando o atributo `cuisine`)
   ```
    db.restaurants.countDocuments({ cuisine: { $ne: 'American' } });

   ```
3. Selecione e faça a contagem dos restaurantes que possuem avaliação **maior ou igual** a  **8** . (utilizando o atributo `rating`)
   ```
   db.restaurants.countDocuments({ rating: { $gte: 8 } });
   ```
4. Selecione e faça a contagem dos restaurantes que possuem avaliação **menor** que  **4** .
   ```
   db.restaurants.countDocuments({ rating: { $lt: 4 } });
   ```
5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações **5,** **6** e  **7** .
   ```
   db.restaurants.countDocuments({ rating: { $in: [5, 6, 7] } });
   ```

## Operadores Lógicos

1. Selecione e faça a contagem dos restaurantes que não possuem avaliação **menor ou igual** a **5,** essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
   ```
   db.restaurants.countDocuments({ rating: { $not: { $lte: 5 } }});
   ```
2. Selecione e faça a contagem dos restaurantes em que a avaliação seja **maior ou igual** a **6,** ou restaurantes localizados no bairro  **Brooklyn** .
   ```
   db.restaurants.countDocuments({ $or: [{ rating: { $gte: 6 } }, { borough: "Brooklyn" }] })

   ```
3. Selecione e faça a contagem dos restaurantes localizados nos bairros **Queens,** **Staten Island** e **Brooklyn** e possuem avaliação **maior** que  **4** .
   ```
   db.restaurants.countDocuments(
     { 
       $and: [
       { borough: { $in: ['Queens', 'Staten Island','Brooklyn'] }}, 
       { rating: { $gte: 4 } }
     ]
    }
   );
   ```
4. Selecione e faça a contagem dos restaurantes onde **nem** o campo avaliação seja igual a **1,** **nem** o campo culinária seja do tipo  **American**.
   ```
   db.restaurants.countDocuments({ $nor: [{ rating: 1 }, { cuisine: "American" }] });

   ```
5. Selecione e faça a contagem dos resturantes em que a avaliação seja **maior** que **6** ou **menor** que **10,** **E** esteja localizado no bairro **Brooklyn** **OU** não possuem culinária do tipo  **Delicatessen**.
   ```

   db.restaurants.countDocuments({
     $and: [
       { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
       { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
     ],
   });

   ```

## Método sort()

1. Ordene alfabeticamente os restaurantes pelo nome (atributo `name`).

   ```

   db.restaurants.find({}, { name: 1, rating: 1}).sort({ name: 1 }).pretty();
   ```
2. Ordene os restaurantes de forma decrescente baseado nas avaliações.

   ```
   db.restaurants.find({}, { name: 1, rating: 1}).sort({ rating: -1 }).pretty();
   ```

## Removendo documentos

1. Remova o primeiro restaurante que possua culinária do tipo  **Ice Cream, Gelato, Yogurt, Ices** .
   ```
   db.restaurants.deleteOne({{ cuisine: { $in: ['Ice Cream', 'Gelato', 'Yogurt', 'Ices'] } } });

   ```
2. Remova todos os restaurantes que possuem culinária do tipo **American**
   ```
   db.restaurants.deleteMany({ cuisine: "American" });
   ```
