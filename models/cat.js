// mock data of cats
const cats = [
  {
    id: 1,
    name: "cat name",
    fluffy: true,
    age: 5,
  },
  {
    id: 2,
    name: "other cat",
    fluffy: false,
    age: 0.5,
    callbackFn: () => {
      console.log("hello");
    },
  },
];

const findAllCats = () => cats;

const findCatById = (id) => cats.find((cat) => cat.id === id);

module.exports = { findAllCats, findCatById };
