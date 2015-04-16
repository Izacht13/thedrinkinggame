var express=require("express"),
    app=express(),
    path=require("path");

app.use(express.static(path.join(__dirname, '/app')));
app.use("/transcribe", express.static(path.join(__dirname, '../app')));

var server=app.listen(80),
    io=require("socket.io").listen(server);

io.on('connection', function(socket){
  console.log('A socket.io user connected');
  socket.on("disconnect", function(){
    console.log('A socket.io user disconnected');
  });
});

console.log("Express server listening on port 80");
