from socketserver import TCPServer, StreamRequestHandler


# essa classe faz a gestão da requisição
class TCPHandler(StreamRequestHandler):
    def handle(self):
        # caracteristicas TCP - three handshake:
        # sempre garantir que o pacote foi recebido
        # se recebeu da um "Ok", se perdeu algum pacote, quebre a conexão.
        # converte string em bytes
        self.wfile.write(b"Ola, cliente!\n")
        while True:
            # le qualquer coisa mandanda pelo cliente
            # strip: remove espaços
            # decode: traduz para utf-8
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.write(b"Cliente desconectado!\n")
                print("cliente desconectado")
                break
            print(data)


if __name__ == "__main__":
    # localhost é um apelido para 127.0.0.1.
    # ip local público
    server_address = ("localhost", 8085)
    # with abre e faz a gestão de um contexto.
    with TCPServer(server_address, TCPHandler) as server:
        print("O server tá ON")
        # manda o servidor ficar escutando
        server.serve_forever()
