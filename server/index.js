
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request')
const conf = require('./conf.json');
const axios = require('axios');
const { throwError } = require('rxjs');



app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

// TODO error handling

const { baseUrl, path: { schedule, searchShow, shows, episodes, cast } } = conf;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('get-tv-schedule', () => {
    getData(`${baseUrl}/${schedule}`).then(val =>
      val.status === 200 ? socket.emit('tv-schedule', val.data) : socket.emit('data-err', { message: val.message, userMessage: 'Schedule not found' }));
  });

  socket.on('search-program', (program) => {
    getData(`${baseUrl}/${searchShow}=${program}`).then(val =>
      val.status === 200 ? socket.emit('shows-found', val.data) : socket.emit('data-err', { message: val.message, userMessage: 'No shows found' }));
  });

  socket.on('get-cast', (programId) => {
    getData(`${baseUrl}/${shows}/${programId}/${cast}`).then(val =>
      val.status === 200 ? socket.emit('cast-found', val.data) : socket.emit('data-err', { message: val.message, userMessage: 'No cast found' }));
  });

  socket.on('get-episodes', (programId) => {
    getData(`${baseUrl}/${shows}/${programId}/${episodes}`).then(val =>
      val.status === 200 ? socket.emit('episodes-found', val.data) : socket.emit('data-err', { message: val.message, userMessage: 'No episodes found' }));
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});





http.listen(3000, () => {
  console.log('listening on *:3000');
});


async function getData(url) {
  try {
    const response = await axios.get(url);
    const { status, data } = response;
    return ({ status, data });
  } catch (error) {
    const { response: { data: { status, message } } } = error;
    return ({ status, message });
  }
}



