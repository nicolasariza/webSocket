const labelOnline = document.querySelector('#labelOnline');
const labelOffline = document.querySelector('#labelOffline');

const socket = io();

socket.on('connect', ()=> {
    labelOnline.hidden = false;
    labelOffline.hidden = true;
});

socket.on('disconnect', ()=> {
    labelOnline.hidden = true;
    labelOffline.hidden = false;
});
