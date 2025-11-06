const { findCatById, findAllCats } = require("../models/cat");

const allCatsController = async (req, res) => {
  res.json(await findAllCats());
};

const getCatById = async (req, res) => {
  const id = Number(req.params.id);
  const [cat] = await findCatById(id);

  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { allCatsController, getCatById };
