import Database from "better-sqlite3";
const db = new Database("database.db"); //either creates a db, or gets the existing one

// create table of messages

db.exec(`
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    comment TEXT NOT NULL
)
`);

//get the data from the client form
async function getMessages() {
  const response = await fetch("https://localhost:5173");
  const newMessage = await response.json();
}

//populate the messages table
const insertMessage = db.prepare(`
INSERT INTO games (username,comment) VALUES (?,?)
`);

insertGame.run(newMessage.username, newMessage.comment);
