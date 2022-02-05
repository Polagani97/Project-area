
let express = require("express");
let app = express();

let http = require('http').createServer(app);
let io = require('socket.io')(http);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

//serve comments data to the requestor
app.get('/api/users',(req,res)=>{
    console.log('users requested')
    //get comments from database
    //return comments to the user
    //res.send(dummyData)
    getUsers(res)
})

app.post('/api/users',(req,res)=>{
    console.log('New User Added')
    console.log('body',req.body)
    let user = req.body;
    //dummyData.push(comment)
    //res.send({result:200})
    insertUser(user,res)
})

io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
    setInterval(()=>{
        socket.emit('number',parseInt(Math.random()*10));
    },1000);
});



//Data base Connection
const uri = "mongodb+srv://priyanka:Priy%402127@cluster0.2dgu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});


let usersCollection;

//this function is used to open the connection
const openConnection = (message)=> {
    client.connect((err,db) => {
      usersCollection = client.db("allUsers").collection("users");
        if(!err){
            console.log('Database Connected')
        }
        else{
            console.log('error in if',err)
        }
    });
}

//insert comment into the db
const insertUser = (user,res)=>{
    //insert into collection
    usersCollection.insertOne(user,(err,result)=>{
        console.log('User Added',result)
        res.send({result:200})
    })
}

//retrieve all comments
const getUsers=(res)=>{
  usersCollection.find({}).toArray(function(err,result){
        if(err) throw err;
        console.log(res)
        res.send(result)
    })
}

openConnection()

http.listen(port,()=>{
    console.log("listening on port",port);
});