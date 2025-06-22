import express from "express";
import { swapVariables } from "./public/Javascript/variableSwap.js";
const app = express();
const port = 3025;
import * as fs from "node:fs";
// Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
// This should handle your index.html if it's directly in 'public'
// app.use(express.static("public"));

// Route for the homepage (if you want to explicitly serve index.html for '/')
// This is often not needed if express.static is set up correctly and index.html is in 'public'
// However, if your index.html is in a subdirectory or you want more control, keep it.
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
//   console.log("Root route accessed!"); // Add this log
//   res.send("Hello, World!");
// });

// Route to handle form submissions
// app.post("/submit", (req, res) => {
//   const { name, email, message } = req.body;
//   console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//   res.send("Form submitted successfully!");
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

fs.rename("hello.txt", "renamed.txt", (err) => {
  if (err) console.log("something went wrong", err);
  else console.log("done");
});
