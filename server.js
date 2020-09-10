//=============================================
// SETUP AND OBTAIN DEPENDENCIES
//=============================================

const express = require("express")
const routes = require("./routes")

//=============================================
// CREATE AND CONFIGURE SERVER
// Set up the basic properties of the server
//=============================================

// Create the "express" server:
const app = express();

// Sets the initial Port that the server will listen through for client-side requests.
// process.env.PORT is a command that means that the server will listen to whatever number is in the environmental variable PORT. 
const PORT = process.env.PORT || 666

// Sets up the Express app to handle data parsing using middleware.
// json and urlencoded are both part of bodyParse in Express: https://github.com/expressjs/body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//=============================================
// BUILD ROUTES
// Creates route files that directs the server to take certain actions when users visit or request data from various URLs 
//=============================================

// API Routes:
app.use(routes);

//=============================================
// START LISTENER
// The code below starts our software server. Almost like initializing a function after creating the function.
//=============================================

app.listen(PORT, function() {
    console.log(`Listening on Port: ${PORT}`)
} )

