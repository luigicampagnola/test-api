const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

//Server Setup
const app = express();
const PORT = 3000;

//EXPRESS middle ware to convert json to obj per req
app.use(express.json()); 



//friends collection


//ROUTERS

 // mounting router middleware at "/friends"
app.use("/friends", friendsRouter);

 // mounting router middleware at "messages"
app.use("/messages", messagesRouter)

//PORT
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
