import http.server
import socketserver
import json
import os

PORT = 8000

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                
                # Read existing agents
                with open('data/agents.json', 'r', encoding='utf-8') as f:
                    agents = json.load(f)
                
                # Update agent
                updated = False
                for agent in agents:
                    if agent['id'] == data['id']:
                        agent['purpose'] = data.get('purpose', agent.get('purpose', ''))
                        agent['prompt'] = data.get('prompt', agent.get('prompt', ''))
                        agent['status'] = data.get('status', agent.get('status', 'Not Implemented'))
                        updated = True
                        break
                
                if updated:
                    with open('data/agents.json', 'w', encoding='utf-8') as f:
                        json.dump(agents, f, indent=2)
                    
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
                else:
                    self.send_error(404, "Agent not found")
                    
            except Exception as e:
                print(f"Error saving data: {e}")
                self.send_error(500, str(e))
        else:
            self.send_error(404)

if __name__ == "__main__":
    # Ensure we are serving from the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
