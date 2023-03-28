const express=require('express');
const app=express();

app.use(express.static('public'));


app.get('/',function(req,res){
    res.sendFile("./index.html");
});
app.get('/home.html',function(req,res){
    res.sendFile("./home.html");
});
app.get('/Achievements.html',function(req,res){
    res.sendFile("./Achievements.html");
});

app.get('/Projects.html',function(req,res){
    res.sendFile("./Projects.html");
});

app.get('/Gallery.html',function(req,res){
    res.sendFile("./Gallery.html");
});

app.get('/Contacts.html',function(req,res){
    res.sendFile("./Contacts.html");
});




app.listen(3000, function () {
    console.log('Server started on port 3000');
});
  