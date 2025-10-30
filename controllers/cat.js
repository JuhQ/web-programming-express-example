const { findCatById, findAllCats } = require("../models/cat");

const allCatsController = (req, res) => {
  console.log("Calling api.js /cats route, which should be /api/v1/cats");
  console.log(req.body);
  res.json(findAllCats());
};

const getCatById = (req, res) => {
  const id = Number(req.params.id);
  const cat = findCatById(id);

  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { allCatsController, getCatById };
