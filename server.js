//import express from node modules file on LHS
import express from "express";

//Instantiate our express app which is a massive object with lots of things in it.
const app = express();

//create a table
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

//start the server. Listen takes 2 params
app.listen(1234, function () {
  console.log("app is running on PORT 1234");
});
