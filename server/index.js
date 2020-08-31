
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request')
const conf = require('./conf.json');
const axios = require('axios');



app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

// TODO error handling

const { baseUrl, path: { schedule, searchShow, shows, episodes, cast }} = conf;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('get-tv-schedule', () => {
    getData(`${baseUrl}/${schedule}`).then(val => socket.emit('tv-schedule', val));
  });

  socket.on('search-program', (program) => {
    getData(`${baseUrl}/${searchShow}=${program}`).then(val => socket.emit('shows-found', val));
  });

  socket.on('get-cast', (programId) => {
    getData(`${baseUrl}/${shows}/${programId}/${cast}`).then(val => socket.emit('cast-found', val));
  });

  socket.on('get-episodes', (programId) => {
    getData(`${baseUrl}/${shows}/${programId}/${episodes}`).then(val => socket.emit('episodes-found', val));
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
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}



