const labelOnline = document.querySelector('#labelOnline');
const labelOffline = document.querySelector('#labelOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', ()=> {
    labelOnline.hidden = false;
    labelOffline.hidden = true;
});

socket.on('disconnect', ()=> {
    labelOnline.hidden = true;
    labelOffline.hidden = false;
});

btnSend.addEventListener( 'click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: '1234',
        date: new Date().getTime()
    }
    socket.emit('send-message', payload, (responseSocket) => {
        console.log(responseSocket);
    });
});

socket.on('send-message', (payload)=>{
    console.log(payload);
    document.querySelector('#message').innerHTML = payload.message;
});
