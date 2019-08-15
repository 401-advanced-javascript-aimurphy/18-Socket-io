'use strict';


// create instance of socket server immediately give it PORT

const io = require('socket.io')(3000);

// allow connection

io.on('connection', (socket)=>{
  console.log(`welcome, ${socket.id}`);
  // socket is doing all the pool nonsense from the other freakin lab
  socket.on('file-save', (payload)=>{
    console.log('filesave happened✅');
    // on the event send a message to the world
    socket.broadcast.emit('message', payload);
    // emit means send ot everybody but the sender
    // see socket io emit cheat sheet for more options
  })
  socket.on('file-error', (payload)=>{
    console.log('fileError happened😬');
    socket.broadcast.emit('message', payload);

  })
})

// subscribe to event 

// on event send out message to the world!