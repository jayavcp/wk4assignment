const form = document.getElementById("messageform");
const messageboard = document.getElementById("messageboard");

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const comment = event.target.comment.value;

  //returns as an object
  console.log({ username: username, comment: comment });

  //making request to server with our form data as the body
  fetch("http://localhost:1234/messages", {
    method: "POST",
    body: JSON.stringify({ username: username, comment: comment }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);

//get the data from my api
async function getMessages() {
  const response = await fetch("https://wk4assignment.onrender.com/messages");
  const messages = await response.json();
  console.log(messages);

  //put messages into the message board
  messages.forEach(function (message) {
    // DOM manipulation to put the games onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = `${message.username} says:`;
    p.textContent = message.comment;

    messageboard.appendChild(h2);
    messageboard.appendChild(p);
  });
}

getMessages();
