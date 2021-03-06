module.exports = {
  operators: [
    "->", // connect
    "at",
    "^",
    "*",
    "/",
    "@",
    "+",
    "-",
    "~!",
    "!",
    ",", // concat
    "->", // connect
    ">|",
    "|<",
    "for",
    "then",
  ], // the order of this list determines binding order
  units: [
    "s", "ms",
    "Hz",
  ],

  shorthandConstructors: [
    "O", "Z", "Sq", "Tri", "Triangle",
    "A", "D",
    "t", "random", 
    "LP", "AP", "HP"
  ]
}

const components = require("../patchesAndComponents")
for(var constr in components)
  module.exports.shorthandConstructors.push(constr)
