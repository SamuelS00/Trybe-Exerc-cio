# Exercícios - agora, a prática

Nos exercícios vamos utilizar diversos conceitos que aprendemos até aqui, praticando como é pensar de uma maneira diferente, agora que sabemos um pouco mais sobre os computadores e como eles funcionam.

 **Exercício 1** : Crie um projeto que simulará a arquitetura que vimos em aula. Ele deverá ter um arquivo principal para a execução do programa que representará nosso *Sistema Operacional* e duas classes, que representarão a *Memória Principal* e a  *Secundária* .

> Cada tipo de memória vai armazenar os dados na memória que ela representa, sendo a Principal aquela que armazena tudo em memória RAM e a secundária no disco. Através do Python estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para nós, pois ele melhor do que ninguém saberá utilizar as memórias. **O objetivo do nosso script será realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória. Os dados serão sempre armazenados como strings!**

Vamos lá:

1. Crie um novo diretório na sua máquina para os exercícios (pode chamar ele de `computador` ou `pc` 😎).
   > Os próximos arquivos deverão ser criados dentro dele.
   >
2. Vamos começar a nossa memória principal, ou memória RAM: para isso crie um arquivo `main_memory.py` e adicione o conteúdo abaixo nela. Implemente os métodos `get` e `load`.

* No load você adicionará (`append`) o elemento passado (`value`) à lista `loaded_memory`.
* No get você retornará o valor presente na posição dada (`index`) na lista `loaded_memory`. Se o valor não existir ou não for numérico, retorne `0`.

Copiar

```python
1classMainMemory:
2def__init__(self):
3    self.clean()
4
5defload(self, value):
6# Sua implementação
7
8defget(self, index):
9# Sua implementação
10
11defclean(self):
12    self.loaded_memory =[]
```

> Perceba que estamos armazenando os valores na memória RAM através das variáveis que definimos!

3. Crie um arquivo `secondary_memory.py` para ser a nossa memória secundária e adicione o conteúdo abaixo. Mais uma vez, você será responsável pela implementação dos métodos `get` e `load` porém agora você deverá utilizar a função `open`, para persistir esses dados em disco.

* No `load`, utilizando o método `open`, escreva um código que crie um novo arquivo utilizando `next_file_name` como `path` e salve o `value` no conteúdo deste novo arquivo.
* No `get`, também utilizando o método `open`, retorne o conteúdo do arquivo `file_name`. Não esqueça de converter o valor para numérico (*float* ou  *int* ).

Copiar

```python
1from os import mkdir, listdir
2from os.path import join
3from shutil import rmtree
4
5DISK_PATH ="./disk"
6
7
8classSecondaryMemory:
9def__init__(self, disk_path=DISK_PATH):
10    self.disk_path = disk_path
11try:
12        mkdir(self.disk_path)
13except FileExistsError:
14pass
15
16defload(self, value):
17    value =str(value)
18    next_index =str(len(listdir(self.disk_path)))
19    next_file_name = join(self.disk_path, next_index)
20# Sua implementação
21
22defget(self, index):
23    index =str(index)
24    file_name = join(self.disk_path, index)
25# Sua implementação
26
27defclean(self):
28    rmtree(self.disk_path)
29    mkdir(self.disk_path)
```

4. Vamos criar nosso arquivo principal para gerenciar as “memórias” que criamos. Para isso, crie um novo arquivo `operating_system.py` e coloque o seguinte conteúdo:

Copiar

```python
1from time import perf_counter
2
3from main_memory import MainMemory
4from secondary_memory import SecondaryMemory
5
6main = MainMemory()
7secondary = SecondaryMemory()
8
9# Números aleatórios a serem somados
10RANDOM_NUMBERS =["36912","84300"]*100
11
12deftimer(string, initial_time):
13"""Função auxiliar para print temporizado"""
14print(string)
15print(f"Tempo para a tarefa terminar: {perf_counter()- initial_time:6f}\n")
16
17
18# Desempenho da memória primária
19main_load_init_time = perf_counter()
20for number in RANDOM_NUMBERS:
21    main.load(number)
22timer("Números carregados na memória principal", main_load_init_time)
23
24main_get_init_time = perf_counter()
25main_sum =sum([main.get(i)for i inrange(len(RANDOM_NUMBERS))])
26timer(f"Soma na memória principal: {main_sum}", main_get_init_time)
27
28main_clean_init_time = perf_counter()
29main.clean()
30timer("Clean na memória principal", main_clean_init_time)
31
32
33# Desempenho da memória secundária
34secondary_load_initial_time = perf_counter()
35for number in RANDOM_NUMBERS:
36    secondary.load(number)
37timer("Números carregados na memória secundária", secondary_load_initial_time)
38
39secondary_get_init_time = perf_counter()
40secondary_sum =sum([secondary.get(i)for i inrange(len(RANDOM_NUMBERS))])
41timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)
42
43secondary_clean_init_time = perf_counter()
44secondary.clean()
45timer("Clean na memória secundária", secondary_clean_init_time)
```

> Perceba que o script do nosso Sistema Operacional faz a medição do tempo que cada uma das três operações (load, get e clean) leva para acontecer tanto na memória principal quanto na secundária. Além disso, as operações são testadas com uma lista de valores (`RANDOM_NUMBERS`).

5. Vamos testar nosso script! Execute o comando `python operating_system.py` e veja a saída no console. Deu certo?! Como foram os tempos de saída?!
6. Para deixar nosso script ainda mais legal, vamos aumentar a quantidade de números para serem somados. Adicione uma grande quantidade de números no array de números aleatórios. Para isso, basta adicionar `* 200` ao final da linha que declara a lista `RANDOM_NUMBERS`, para multiplicar a quantidade de elementos na lista. Rode o script novamente. Como foi o tempo de resposta agora? Deu diferença, né? Qual foi mais rápido?!
7. Agora, vamos reforçar mais um conteúdo aprendido:
8. Comente os trechos de código que fazem a operação de limpeza (`clean`) da memória.
9. Execute o comando novamente
10. Comente os trechos de código que fazem a operação de carregamento (`load`) da memória e execute novamente.
11. Compare os resultados das somas. O que aconteceu?

 **Exercício 2** : Agora vamos explorar o sistema que estamos utilizando. Crie um script chamado `my_platform.py` e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o módulo [platform](https://docs.python.org/3/library/platform.html) do Python 😎.

1. A *plataforma* que está sendo utilizada (`linux`, `win32`, `darwin`, etc);
2. A versão (release);
3. A arquitetura (`x32` ou `x64`);

 **Exercício 3** : Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o shell. Crie um script chamado `resources.py` e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o método `check_output` do módulo [subprocess](https://docs.python.org/3/library/subprocess.html) do Python 😎.

1. Informações sobre a sua CPU (no Linux você pode usar comando `lscpu`, e no OSX você pode usar o comando `sysctl -n machdep.cpu.brand_string`):
2. O modelo;
3. A quantidade de  *cores* ;
4. A velocidade em  **Megahertz - MHz** ;
5. A quantidade de cache (L1, L2, L3).
6. Informações sobre a memória RAM (no Linux você pode usar comando `free`, e no OSX você pode usar o comando `top -l 1 | head -n 10 | grep PhysMem`):
7. A quantidade total de memória RAM disponível em sua máquina **em megabytes - MB** (faça a conversão também 😉).
8. A quantidade total de memória RAM que está sendo utilizada  **em megabytes - MB** .

👀 **De olho na dica:**

* O método `decode("UTF-8")` vai ser útil para ler os dados oriundos da `check_output`;
* Os métodos `split` e `strip` vão ser úteis para limpar e separar as informações obtidas com os comandos;
* O método `startswith` vai ser útil para selecionar informações específicas.
* Se estiver muito difícil fazer a filtragem e limpeza dos dados, se contente com a exibição de informações a mais 😉

 **Exercício 4** : Faça um script que, a cada intervalo de segundo, mostre no console a memória utilizada do sistema operacional *vs* a memória total (ambos em  **megabytes - MB** ). Lembre-se que você pode se basear no script do exercício anterior.

 **Exercício 5** : Faça um script que exibe o seu respectivo `process id` utilizando o módulo [os](https://docs.python.org/3/library/os.html) do Python e então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento visto no conteúdo, exiba os processos em execução e então identifique o seu processo.
