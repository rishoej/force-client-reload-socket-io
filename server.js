var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/style.css', function (req, res) {
  res.sendfile(__dirname + '/style.css');
});

io.on('connection', function (socket) {
  socket.on('reload', function (data) {
    socket.broadcast.emit('reload', { data });
  });
});