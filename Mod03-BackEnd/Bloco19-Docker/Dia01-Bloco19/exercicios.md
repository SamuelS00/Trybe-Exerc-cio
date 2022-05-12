### Agora a prática

1. 🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

2. 🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.

3. 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

        docker pull debian:stable-slim

4. 🚀 Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

        docker container run -ti debian:slable-slim

5. 🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.

        // retorno
        root@3f6fccd41358:/# cat /etc/*-release
        PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
        NAME="Debian GNU/Linux"
        VERSION_ID="11"
        VERSION="11 (bullseye)"
        VERSION_CODENAME=bullseye
        ID=debian
        HOME_URL="https://www.debian.org/"
        SUPPORT_URL="https://www.debian.org/support"
        BUG_REPORT_URL="https://bugs.debian.org/"

6. 🚀 Encerre o terminal.

        exit

7. 🚀 Verifique na sua lista de contêiners qual contêinerse refere ao exercício que acabou de praticar.

        docker container ls -
        CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS                            PORTS     NAMES
        3f6fccd41358   debian:stable-slim    "bash"                   2 minutes ago    Exited (130) About a minute ago             angry_ramanujan
        
8. 🚀 Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

        docker container start 3f6fccd41358 

9. 🚀 Retome o contêiner que foi criado anteriormente neste exercício.

        docker container attach 3f6fccd41358

10. 🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.

        // retorno
        root@3f6fccd41358:/# cat /etc/*-release
        PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
        NAME="Debian GNU/Linux"
        VERSION_ID="11"
        VERSION="11 (bullseye)"
        VERSION_CODENAME=bullseye
        ID=debian
        HOME_URL="https://www.debian.org/"
        SUPPORT_URL="https://www.debian.org/support"
        BUG_REPORT_URL="https://bugs.debian.org/"

12. 🚀 Remova somente o contêiner criado para esse exercício.

        docker container rm 3f6fccd41358

13. [BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.

        docker container run --rm andrius/ascii-patrol
