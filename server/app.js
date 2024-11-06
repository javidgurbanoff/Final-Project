const express = require("express");
const app = express(); // Corrected line

const fs = require("fs");

app.use(express.json());

const PORT = 8080;

const url = fs.readFileSync("db.json", "utf-8");
const Db = JSON.parse(url);

app.get("/", (req, res) => {
  res.json({ message: "Hello World", data: Db }).status(200);
});

app.get("/users", (req, res) => {
  res.status(200).json({
    data: Db,
    result: Db.length,
  });
});

// Define the POST route
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const users = Db.data;

  if (!name || !email) {
    return res.status(400).json({ message: "Please provide name and email" });
  }

  // Define newUser outside the if/else block
  const newUser = { id: users.length + 1, name: name, email: email };

  // Add newUser to the Db data array
  users.push(newUser);

  // Write the updated Db object back to db.json
  fs.writeFile("db.json", JSON.stringify(Db, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error writing to file" });
    }
    res.status(201).json({ message: "User added successfully", data: newUser });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
