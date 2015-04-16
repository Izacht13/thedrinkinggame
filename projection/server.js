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
  socket.on("banner", function(data){
    var validData={
      title:String(data.title),
      image:String(data.image)
    };
    socket.broadcast.emit('banner-projector', validData);
  });
  socket.on("quote", function(data){
    console.log(data);

    if (!data.actor){data.actor={};}

    var validData={
      actor:{
        name:String(data.actor.name),
        image:String(data.actor.image)
      },
      quote:String(data.quote)
    };
    socket.broadcast.emit('quote-projector', validData);
  });
  socket.on("error", function(data){
    console.log("Theres been an error: "+data);
  });
});

console.log("Express server listening on port 80");
