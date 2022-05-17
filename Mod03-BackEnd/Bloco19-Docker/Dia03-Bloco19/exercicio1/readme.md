### Agora a prática

🚀 Exercício 1:

Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
* Tag title com o seguinte texto "Trybe";
* Tag H1 com o seguinte texto "Missão da Trybe";
* Tag p com o seguinte texto "Gerar oportunidade para pessoas";
* Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

         docker run -d --name site-trybe -p 4545:80 -v "/home/samuel/trybe/Trybe-Exercicio/Mod03-BackEnd/Bloco19-Docker/Dia03-Bloco19/exercicio1:/usr/local/apache2/htdocs/" httpd:2.4

3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser. 

4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";


5. Obtenha o id do container httpd:2.4;

         docker container ls -a

         //retorno

         CONTAINER ID   IMAGE                 COMMAND                  CREATED        STATUS                       PORTS                                   NAMES
         6bdaf3faaf1e   httpd:2.4             "httpd-foreground"       14 hours ago   Exited (255) 8 minutes ago   0.0.0.0:4545->80/tcp, :::4545->80/tcp   site-trybe
         b5d38a0d7e70   cowsay                "/usr/games/cowsay -…"   3 days ago     Exited (0) 3 days ago                                                mystifying_payne

6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;
          
       docker inspect site-trybe
      
       //retorno

       "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/samuel/trybe/Trybe-Exercicio/Mod03-BackEnd/Bloco19-Docker/Dia03-Bloco19/exercicio1",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }

7. Agora pare o container httpd:2.4;

         docker stop site-trybe

8. Exclua o seu container;

         docker rm site-trybe

9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

10. Obtenha o IMAGE ID do servidor;

         docker images

11. Depois de obter o IMAGE ID, exclua a imagem.

         docker image rm a8ea074f4566 
