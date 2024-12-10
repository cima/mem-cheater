
from http.server import CGIHTTPRequestHandler, HTTPServer

handler = CGIHTTPRequestHandler
handler.cgi_directories = ['/cgi-bin']  # this is the default
server = HTTPServer(('localhost', 8000), handler)
server.serve_forever()