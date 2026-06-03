from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import socket
from socketserver import TCPServer


PORT = 8123
ROOT = Path(__file__).resolve().parent


class LocalHTTPServer(ThreadingHTTPServer):
    def server_bind(self):
        TCPServer.server_bind(self)
        host, port = self.server_address[:2]
        self.server_name = host
        self.server_port = port


def get_lan_ip():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        sock.connect(("8.8.8.8", 80))
        return sock.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        sock.close()


def main():
    handler = partial(SimpleHTTPRequestHandler, directory=str(ROOT))
    server = LocalHTTPServer(("0.0.0.0", PORT), handler)
    lan_ip = get_lan_ip()
    print("")
    print("Health planner is running.")
    print(f"Computer: http://localhost:{PORT}/home.html")
    print(f"Phone:    http://{lan_ip}:{PORT}/home.html")
    print("")
    print("Keep this window open while using it on your phone.")
    print("Press Ctrl+C to stop.")
    print("")
    server.serve_forever()


if __name__ == "__main__":
    main()
