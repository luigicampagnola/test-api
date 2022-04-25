//Path module
const path = require("path");

function getMessages(req, res) {
  //We use the sendFile method and path module
  res.sendFile(path.join(__dirname, "..", "public", "photo2.jpg"));
}

function postMessage(req, res, messages) {
  const newMessage = {
    instance: messages.length,
    message: req.body.message,
  };
  messages.push(newMessage);
  res.json(newMessage);
}

module.exports = {
  getMessages: getMessages,
  postMessage: postMessage,
};
