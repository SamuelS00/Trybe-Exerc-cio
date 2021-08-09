# Exercicios 

```
 Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.
Copiar
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```
###### 
Agora você! Faça o seguinte:

##### Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
```
document.elementById("page-title").innerText = "Homem-Araha"
```
##### Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
```
document.elementById("second-paragraph").innerText = "estreia 2002"
```
##### Por fim, recupere o subtítulo e altere-o também.
```
document.elementById("subtitle").innerText = "o espetacular.." 
```