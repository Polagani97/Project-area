// To establish db connection
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://priyanka:Priy%402127@cluster0.2dgu3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let usersCollection;

module.exports = {
  connect: (callback) => {
      client.connect((err, db) => {
          if (err || !db)
              return callback(err);

          usersCollection = client.db("allUsers").collection("users");

          console.log("Connected to MongoDB Atlas");

          callback();
      });
  },
  getDB : () => {
      return usersCollection;
  },
  disconnect : () => {
      client.close();
  }
}
