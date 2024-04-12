//import express from node modules file on LHS
import express, { request } from "express";
import cors from "cors";

//Instantiate our express app which is a massive object with lots of things in it.
const app = express();

//tell express to expect info in body of request
app.use(express.json());
app.use(cors()); //this allows client to speak to server without being blocked. cors is a bridge

//example: create a mini table to use with an endpoint
const friends = [
  { name: "Jaya", thing: "tea" },
  { name: "Steve", thing: "yugioh" },
  { name: "Krish", thing: "astrology" },
];

//our root endpoint. like an event listener for someone visiting the / endpoint.
app.get("/", function (request, response) {
  console.log("/ is called");
  response.json("Root roude rude.");
});

//friends ensdpoint
app.get("/friends", function (request, response) {
  response.json(friends);
});

//random number endpoint
app.get("/random", function (request, response) {
  const random = Math.floor(Math.random() * 1001);
  response.json(random);
});

//messages endpoint
app.post("/messages", function (request, response) {
  response.json(request.body);
  console.log(request.body);
});

//start the server on http://localhost:1234/
//Listen takes 2 params
app.listen(1234, function () {
  console.log("app is running on PORT 1234");
});
