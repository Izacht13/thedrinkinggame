var express=require("express"),
    app=express(),
    path=require("path");


app.use(express.static(__dirname + '/app'));
app.use("/transcribe", express.static(path.join(__dirname, '../app')));

var server=app.listen(80),
    io=require("socket.io").listen(server);

console.log("Express server listening on port 80");
