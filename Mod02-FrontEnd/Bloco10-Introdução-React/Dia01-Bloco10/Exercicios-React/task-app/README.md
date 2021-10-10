# Crie uma lista de tarefas simples seguindo os passos abaixo:

insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :

```
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
```
* agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .

* por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .