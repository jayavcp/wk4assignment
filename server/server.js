//import express from node modules file on LHS
import express, { request } from "express";
import cors from "cors";

//Instantiate our express app which is a massive object with lots of things in it.
const app = express();

//tell express to expect info in body of request
app.use(express.json());
app.use(cors()); //this allows client to speak to server without being blocked. cors is a bridge.

// connect to the database.db file of messages
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

//ROOT ENDPOINT. like an event listener for someone visiting the / endpoint.
app.get("/", function (request, response) {
  console.log("/ is called");
  response.json("Root route roude.");
});

//messages endpoint POST http://localhost:1234/messages
//This is where we take client's request info i.e. messages and put them in the database.
//client requests that something be done with the info
app.post("/messages", function (request, response) {
  const newMessage = request.body;
  response.json(newMessage);
  console.log(newMessage);
});

//messages endpoint GET ttp://localhost:1234/messages
app.get("/messages", function (req, res) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const messages = db.prepare("SELECT * FROM messages").all();
  response.json(messages);
});

//start the server on http://localhost:1234/
//Listen takes 2 params
app.listen(1234, () => {
  console.log("app is running on PORT 1234");
});

// ----------PRACTISE CODE ----------

//example: create a mini table to use with an endpoint called friends
// const friends = [
//   { name: "J", thing: "tea" },
//   { name: "S", thing: "games" },
//   { name: "K", thing: "sports" },
// ];

//friends ensdpoint http://localhost:1234/friends
// app.get("/friends", function (request, response) {
//   response.json(friends);
// });

//random number endpoint http://localhost:1234/random
// app.get("/random", function (request, response) {
//   const random = Math.floor(Math.random() * 1001);
//   response.json(random);
// });
