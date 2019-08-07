const movies = ["Leon", "Love Actually", "Lord of the Rings"];
console.log(...movies);

const numbers = new Set([1, 4, 5, 7]);
console.log(...numbers);

const shapes = ["triangle", "square", "circle"];
const objects = ["pencil", "notebook", "eraser"];
// const chaos = shapes.concat(objects);
const chaos = [...shapes, ...objects];
console.log(chaos);

const movie = [
  "Life of Brian",
  8.1,
  1979,
  "Graham Chapman",
  "John Cleese",
  "Michael Palin"
];
const [title, rating, year, ...actors] = movie;
console.log(title, rating, year, actors);

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(494, 373, 29, 2, 50067));
console.log(sum(-17, 8, 325900));
