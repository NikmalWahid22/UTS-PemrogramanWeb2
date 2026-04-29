const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Server Aktif\n');
});

const wss = new WebSocket.Server({ server });
const clients = new Set();

wss.on('connection', (ws, req) => {
  clients.add(ws);
  ws.send(JSON.stringify({ type: 'system', message: 'Selamat datang di WebSocket Chat!' }));

  ws.on('message', (rawData) => {
    const data = JSON.parse(rawData.toString());
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: 'chat',
          sender: data.username || 'Anonim',
          message: data.message,
          timestamp: new Date().toISOString()
        }));
      }
    });
  });

  ws.on('close', () => { clients.delete(ws); });
});

server.listen(8080, () => {
  console.log('Server WebSocket berjalan di ws://localhost:8080');
});