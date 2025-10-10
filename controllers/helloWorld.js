const helloWorldController = (req, res) => {
  // get data from model

  // use res.send() or other method to send data to client
  // helloWorldView(dataFromHelloWorldModel)
  res.send("Hello world");
};

module.exports = helloWorldController;
