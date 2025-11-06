const express = require("express");
const { allCatsController, getCatById } = require("../controllers/cat");

const router = express.Router();

router.get("/cats", allCatsController);
router.get("/cats/:id", getCatById);

module.exports = router;
