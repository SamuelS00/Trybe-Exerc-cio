from socketserver import UDPServer, DatagramRequestHandler


# no UDP ele não garante que os pacotes chegaram, apenas envia.
class UDPHandler(DatagramRequestHandler):
    def handle(self):
        self.wfile.write(b"ola, cliente!\n")
        data = self.rfile.readline().strip().decode("UTF-8")
        print(data)


if __name__ == "__main__":
    server_address = ("localhost", 8084)
    with UDPServer(server_address, UDPHandler) as server:
        print("O server tá ON")
        server.serve_forever()
