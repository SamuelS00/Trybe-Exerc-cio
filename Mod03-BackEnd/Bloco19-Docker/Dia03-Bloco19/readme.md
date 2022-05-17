### Agora a prática

🚀 Exercício 1:

Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
* Tag <title> com o seguinte texto "Trybe";
* Tag <H1> com o seguinte texto "Missão da Trybe";
* Tag <p> com o seguinte texto "Gerar oportunidade para pessoas";
* Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

   docker run -d --name site-trybe -p 4545:80 -v "/home/samuel/trybe/Trybe-Exercicio/Mod03-BackEnd/Bloco19-Docker/Dia03-Bloco19/exercicio1:/usr/local/apache2/htdocs/" httpd:2.4

3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.