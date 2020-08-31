
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request')
const conf = require('./conf.json');
const axios  = require('axios');



app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

// TODO error handling

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('get-tv-schedule', () => {
      getData(`${conf.baseUrl}/${conf.path.schedule}`).then(val => socket.emit('tv-schedule', val));
    });

    socket.on('search-program', (program) => {
      getData(`${conf.baseUrl}/${conf.path.searchShow}=${program}`).then(val => socket.emit('shows-found', val));
    })


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



