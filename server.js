const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/',(req, res) => {
res.send('<h1>Hello world</h1>')

})

http.listen(3000, ()=>{
    console.log('listening on port 3000')
});

io.on('connection',(socket)=> {
    console.log('client connected');
    dataUpdate(socket);
})

function dataUpdate(socket){
socket.emit('dataUpdate', Array.from({length:12},()=>Math.floor(Math.random()*(100-1)+1)));
setTimeout(()=>{
    dataUpdate(socket);
},3000)
}



