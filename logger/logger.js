'use strict';

const io= require('socket.io-client');

const socket = io.connect('3000');

socket.on('file-save', (payload)=>{
  console.log(payload);
})

socket.on('file-error', (payload)=>{
  console.log(payload);
})