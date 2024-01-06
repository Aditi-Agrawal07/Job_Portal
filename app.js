const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Import Utilities
const  { database } = require("./utils") 

// Start Routes
const { userRouter,jobRouter,studentRouter  } = require("./Routes")

app.use("/user", userRouter)
app.use("/jobs", jobRouter)
app.use("/student",studentRouter)

module.exports = app